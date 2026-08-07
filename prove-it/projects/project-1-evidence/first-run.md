# Project 1 first-run evidence

## Before the worker

- Contract: [`../project-1-contract.yaml`](../project-1-contract.yaml)
- Goal: [`../project-1-goal.md`](../project-1-goal.md)
- Rider: [`../project-1-rider.md`](../project-1-rider.md)
- Bet card: [`../project-1-bet-card.md`](../project-1-bet-card.md)
- Protected check: [`../../working/test/session-record.test.mjs`](../../working/test/session-record.test.mjs)

The operator ran `node --test test/session-record.test.mjs` from `prove-it/working` before implementation. It exited 1 because `working/src/session-record.mjs` did not exist. The retained result is [`pre-run-red.txt`](pre-run-red.txt).

The operator then opened run `p1-session-evidence`. The [run manifest](../../runs/p1-session-evidence/run.json) fixed contract sha256 `ba0b862bb1655d1a8bdff791f302dcfb8dc53e65ae103b0793aa1741334cd160` and pinned protected-test sha256 `e11a7a3ddfbde84618bf36848c6c07a37cc4a677effb16d77d7ba37e14443b0e` before implementation. The Session 0 baseline remained at sha256 `2527c6d22db162ac6b9ec21296a5fe0ec8fc8c9be5db13bbc483fe5bef32aac4`.

The independent gate also ran before implementation and truthfully refused the candidate because the named check exited 1. Its retained output is [`check-output.txt`](../../runs/p1-session-evidence/check-output.txt).

## First cold-start action

The complete privacy-safe transcription is [`worker-agent-log.md`](worker-agent-log.md).

The worker first announced that it would read the two brief files and repository instructions. Its first tool command also attempted to search Codex memory. The chained command stopped before those reads, but the next tool action explicitly read the goal, rider, Codex memory, and a prior course rollout summary.

This did not match the intended `goal + rider only` information boundary.

## Operator interrupt or approval

The plan itself respected the expected route: one implementation file, no legacy backfill, no invented provenance, and the protected check unchanged. The operator approved it with `do it`; no interrupt occurred.

In retrospect, the operator should have interrupted on the extra memory access. The bet card predicted application-level wrong premises but did not name context expansion as an interrupt signal.

## Worker result

The worker created only [`session-record.mjs`](../../working/src/session-record.mjs), ran `node --test test/session-record.test.mjs` from `prove-it/working`, and reported exit 0 with three passes and no failures or skips. It correctly left release to the gate and named GAiDFLY integration as the remaining blind spot.

## Independent gate result

The operator reran the named check independently: three passed. The gate then accepted the unchanged protected test and fixed contract, issued [`p1-session-evidence.json`](../../control/receipts/p1-session-evidence.json), and the harness recorded completion in [`events.jsonl`](../../runs/p1-session-evidence/events.jsonl). The retained gate output is [`check-output.txt`](../../runs/p1-session-evidence/check-output.txt).

The receipt proves the contracted software result for candidate tree `tree:6cd04ba653de1f90b0df7a943b9ec47cb63ea37aa6eea7a7552f9d585b20e54b`. It does not cure the contaminated cold-start trajectory; the gate result and agent log answer different questions.
