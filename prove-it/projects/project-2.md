# Project 2 — controlled and attacked run

## The moment the run became uncertain

The brief told the worker to treat the goal and rider as its complete context.
Its first tool sequence also reached into Codex memory and a prior course
summary. At that point the passing result could no longer prove that the goal
and rider were sufficient on their own. The extra context is recorded in the
[original worker log](project-1-evidence/worker-agent-log.md).

## The control I chose, and why

I treated the original run as contaminated for the cold-start claim, while
keeping its passing software result. I then ran the same brief with Codex
memory disabled and inspected the saved trace. This isolates the source of
uncertainty: memory is disabled at invocation, and the trace makes the worker's
actual context access inspectable afterward. The
[controlled-rerun evidence](project-2-evidence/controlled-rerun.md) shows no
memory-path access, but the candidate was already implemented. I therefore
accept this only as a check of the memory boundary, not as proof that the brief
could produce the implementation from red.

## The case I made wrong on purpose

In this module, the seed is the assignment configuration for a session. The
session record must preserve the seed version that was present when record
creation began. This version identifies the assignment state associated with
the student's work. If the seed changes during a file-system wait, the old
code can store the later version instead. This test covers capture time in the
small module. It does not prove which assignment version a real GAiDFLY
interface showed to a student.

I called `createSessionRecord`, then changed the supplied seed while its first
filesystem operation was still pending. The implementation captured the later
assignment text in `seed_snapshot`. The old test still passed because it only
changed the seed after creation had finished. The setup and commands are in the
[wrong-case evidence](project-2-evidence/wrong-case.md).

## The evidence that came back

The weak check passed the vulnerable implementation: three tests passed. I
added one concurrent-mutation test and ran the same command; it failed with the
later assignment text as the actual snapshot. I moved serialization before the
first asynchronous gap and ran the unchanged stronger check again; all four
tests passed. The evidence preserves the [weak pass](project-2-evidence/weak-check-pass.txt),
[strong failure](project-2-evidence/strong-check-fail.txt), and
[strong pass](project-2-evidence/strong-check-pass.txt).

## The blind spot that remains

The stronger check covers when the seed is captured during a successful
creation. It does not inject a crash after the session directory is created but
before `meta.json` is durable. That can leave an incomplete academic record
that a retry sees only as “already exists.” The next check needs failure
injection plus reconciliation of a missing or malformed `meta.json`.
