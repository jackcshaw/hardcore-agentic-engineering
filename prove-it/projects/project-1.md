# Project 1 — contracted run

## The result I attempted

A new session record preserves the exact seed used when the session begins. A historical record without a snapshot remains readable and unchanged; the software never reconstructs missing provenance from today's seed.

## The contract, fixed before the run started

[`project-1-contract.yaml`](project-1-contract.yaml) names the observable result, pins [`session-record.test.mjs`](../working/test/session-record.test.mjs), limits the worker to one implementation file, and leaves release with the human operator.

The operator watched the named check fail before implementation and opened the harness run before giving the work to a fresh agent. The run identity and red output are linked from the [first-run evidence](project-1-evidence/first-run.md).

## The cold-start brief I gave the agent

The fresh agent receives only the [`goal`](project-1-goal.md) and [`rider`](project-1-rider.md). The rider carries the operator-only fact that these records are evidence of student learning and judgment, so absent historical provenance must remain unknown rather than be reconstructed. The [`bet card`](project-1-bet-card.md) states the expected first action and interrupt signal.

## What the first run actually did

Pending the cold-start worker run. Its first action, any interrupt, the implementation result, and the independent gate result will be recorded in [`project-1-evidence/first-run.md`](project-1-evidence/first-run.md).

## The doubt I still have

The protected check proves the semantics of a small, synthetic file-backed module. It does not prove that GAiDFLY's current session and debrief routes use that module, nor does it prove privacy, authorization, transcript immutability, or the quality of the student's judgment.
