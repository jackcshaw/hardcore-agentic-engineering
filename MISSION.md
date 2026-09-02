# Mission: Verifiable agentic engineering

## Why
Build a quality gate inside Jack's own harness that judges agent work against Jack's definition of done. An agent's completion claim should not count as evidence, and the worker must not be able to change the contract or metric it is being judged against.

## Success looks like
- Define the required result, boundaries, and evidence before a run begins.
- Run an independent quality gate after the worker finishes, with the gate and thresholds outside the worker's authority.
- Detect attempts to weaken a metric, alter a check, contaminate evidence, or narrow the claimed outcome.
- Apply the method to one real repository task and defend why the resulting evidence proves the intended result.

## Constraints
- The worker may optimize for passing the visible check rather than achieving the real outcome.
- Verification must run inside Jack's harness and must not trust the worker's self-report.
- Practice should follow the course's one-task, three-week structure and connect to Jack's real work.

## Out of scope
- Maximizing agent speed or autonomy before the verification boundary is trustworthy.
- Treating a persuasive explanation or clean-looking diff as proof of correctness.

