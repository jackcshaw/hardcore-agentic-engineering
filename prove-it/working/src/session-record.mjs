import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function createSessionRecord({ rootDir, sessionId, metadata, seed }) {
  const sessionDir = join(rootDir, sessionId);

  try {
    await mkdir(sessionDir);
  } catch (error) {
    if (error?.code === 'EEXIST') {
      throw new Error(`Session record already exists: ${sessionId}`);
    }
    throw error;
  }

  const record = {
    ...metadata,
    seed_snapshot: seed,
  };

  await writeFile(join(sessionDir, 'meta.json'), `${JSON.stringify(record, null, 2)}\n`);
}

export async function readSessionRecord({ rootDir, sessionId }) {
  const contents = await readFile(join(rootDir, sessionId, 'meta.json'), 'utf8');
  return JSON.parse(contents);
}
