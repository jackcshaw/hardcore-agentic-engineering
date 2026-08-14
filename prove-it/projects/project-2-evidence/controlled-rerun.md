# Controlled memory-boundary rerun

The original worker used context outside the supplied goal and rider. I
treated that run as contaminated for the claim that those two files were a
complete cold-start brief.

I ran the same brief again from the submitted Project 1 commit with Codex
memory disabled, then inspected the saved task trace instead of relying on a
blank terminal watcher. The privacy-safe [trace extract](controlled-rerun-trace.txt)
records the task identity, starting commit, memory mode, tool-call inventory,
and named check result.

The controlled trace recorded `memory_mode: disabled` and no tool call that
targeted Codex memory. That supports the narrower claim that this invocation
did not import the durable memory used by the first worker.

It was not a clean implementation replay. The candidate was already green at
the starting commit, and the worker edited the existing implementation in the
same worktree. I restored the submitted implementation afterward. The control
therefore tests the information boundary, not whether the goal and rider alone
could produce the software from a red baseline.

Redactions: local home-directory prefixes and unrelated system instructions.
