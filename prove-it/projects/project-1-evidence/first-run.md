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

Pending: paste the fresh worker's first tool action or plan here before implementation.

## Operator interrupt or approval

Pending: record whether the first plan respected the operator-only fact. If not, record the one-sentence correction and the revised rider/run.

## Worker result

Pending: record the worker's exact check command, exit status, and claimed result.

## Independent gate result

Pending: link the gate output and receipt after the candidate is checked.
