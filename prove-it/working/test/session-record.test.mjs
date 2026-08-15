import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, test } from 'node:test';

import { createSessionRecord, readSessionRecord } from '../src/session-record.mjs';

const scratch = [];

afterEach(async () => {
  await Promise.all(scratch.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

async function temporaryRoot() {
  const root = await mkdtemp(join(tmpdir(), 'session-record-'));
  scratch.push(root);
  return root;
}

function exampleSeed() {
  return {
    id: 'strategy-writing',
    mode: 'defense',
    title: 'Strategic Leader Research',
    prompt: 'Defend the value of rigorous research and writing.',
    stances: ['defend', 'challenge'],
    inquiry_lines: ['time tradeoffs', 'judgment transfer'],
    case_text: 'Rigorous research and writing improve strategic judgment.',
  };
}

test('a new session preserves the exact seed used at session start', async () => {
  const rootDir = await temporaryRoot();
  const seed = exampleSeed();
  const expectedSnapshot = structuredClone(seed);

  await createSessionRecord({
    rootDir,
    sessionId: 'session-new',
    metadata: { student_id: 'student-synthetic', started_at: '2026-08-07T12:00:00Z' },
    seed,
  });

  seed.case_text = 'The assignment was edited after the session started.';

  const stored = JSON.parse(await readFile(join(rootDir, 'session-new', 'meta.json'), 'utf8'));
  assert.deepEqual(stored.seed_snapshot, expectedSnapshot);
  assert.equal(stored.student_id, 'student-synthetic');
  assert.equal(stored.started_at, '2026-08-07T12:00:00Z');
});

test('a session captures its seed before the first asynchronous gap', async () => {
  const rootDir = await temporaryRoot();
  const seed = exampleSeed();
  const expectedSnapshot = structuredClone(seed);

  const creating = createSessionRecord({
    rootDir,
    sessionId: 'session-concurrent',
    metadata: { student_id: 'student-synthetic', started_at: '2026-08-07T12:00:00Z' },
    seed,
  });

  seed.case_text = 'The assignment changed while the session record was being created.';
  await creating;

  const stored = JSON.parse(await readFile(join(rootDir, 'session-concurrent', 'meta.json'), 'utf8'));
  assert.deepEqual(stored.seed_snapshot, expectedSnapshot);
});

test('a legacy record remains readable without invented provenance or changed bytes', async () => {
  const rootDir = await temporaryRoot();
  const sessionDir = join(rootDir, 'session-legacy');
  const legacyBytes = '{\n  "seed_id": "strategy-writing",\n  "student_id": "student-synthetic"\n}\n';
  await mkdir(sessionDir);
  await writeFile(join(sessionDir, 'meta.json'), legacyBytes);

  const record = await readSessionRecord({ rootDir, sessionId: 'session-legacy' });

  assert.equal(record.seed_id, 'strategy-writing');
  assert.equal(Object.hasOwn(record, 'seed_snapshot'), false);
  assert.equal(await readFile(join(sessionDir, 'meta.json'), 'utf8'), legacyBytes);
});

test('creating a session refuses to overwrite an existing academic record', async () => {
  const rootDir = await temporaryRoot();
  const sessionDir = join(rootDir, 'session-existing');
  const originalBytes = '{"student_id":"student-synthetic","status":"complete"}\n';
  await mkdir(sessionDir);
  await writeFile(join(sessionDir, 'meta.json'), originalBytes);

  await assert.rejects(
    createSessionRecord({
      rootDir,
      sessionId: 'session-existing',
      metadata: { student_id: 'someone-else' },
      seed: exampleSeed(),
    }),
    /already exists/i,
  );

  assert.equal(await readFile(join(sessionDir, 'meta.json'), 'utf8'), originalBytes);
});
