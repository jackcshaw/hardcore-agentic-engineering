# Rider — session evidence

## Context

- This is a deliberately small Project 1 application under `prove-it/working`, shaped after GAiDFLY's file-backed session records.
- The contract is `projects/project-1-contract.yaml`. The harness pins its hash and the protected test before the worker starts.
- The candidate is `working/`. Greg's existing slugify fixture is unrelated and must remain unchanged.

## Operator-only ground truth

- GAiDFLY session records are evidence of a student's learning, knowledge, and judgment at a particular moment.
- A historical record without a seed snapshot has unknown provenance. Looking up today's seed and inserting it would reconstruct history, not recover evidence.
- Do not inspect, copy, or use any real student session as a fixture. The protected test creates synthetic records only.

## Evidence and focus files

- `working/test/session-record.test.mjs` is the protected, operator-owned check. Read it; do not edit it.
- Before implementation, the named check exits red because `working/src/session-record.mjs` does not exist.
- `working/src/session-record.mjs` is the only file the worker may create or change.

## Required route

1. Read the contract, rider, and protected test.
2. Propose one short implementation plan before editing.
3. Implement only the exported behavior named by the test.
4. Run `node --test test/session-record.test.mjs` from `working/`.
5. Report the command, exit status, and one remaining blind spot.

## Fences and stop conditions

- Never reconstruct a missing snapshot from a current seed.
- Never overwrite or backfill an existing record.
- Never read or copy a real student record.
- Stop and ask before changing the protected test, contract, baseline, slugify fixture, dependencies, or file format beyond what the check requires.
- Stop if the same failure recurs twice for the same reason.

## Open question

- Passing this synthetic module does not establish that GAiDFLY currently calls it. Integration remains outside Project 1.
