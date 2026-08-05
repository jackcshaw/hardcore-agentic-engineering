# Real-repo task card (Session 0, task 3)

Repo (name or redacted alias):
GAiDFLY

One-sentence task (a result, not an activity):
The Human Keeps the Verdict gate refuses to run without _Strategic Leader Research_, rejects transcripts where GAiDFLY supplies the resolution, and accepts ones where it presses the fixed lethal assumption while the student owns the resolution.

The observable result:
An offline check runs on _Strategic Leader Research_ and its fixed brief, fails closed if either is unavailable, and returns turn-cited rejection for false sparring and acceptance for student-owned resolution.

The check command that would prove it:
`uv run pytest -q tests/test_human_keeps_verdict_gate.py -p no:cacheprovider`

Expected exit status today:
Exit 4: `ERROR: file or directory not found: tests/test_human_keeps_verdict_gate.py`. The case, fixtures, and gate do not exist yet.

Blast radius if an agent gets it wrong:
Fixed case fixtures, offline evaluator/tests, and perhaps `prompts/adversary_defense.md`. Git-reversible. No deployment, production `/data`, live briefs, papers, transcripts, or accounts.

What must NOT change:
Once fixed in Session 1: case paper/brief, lethal assumption, evaluator rules, fixtures, and thresholds. Existing interfaces, privacy boundaries, production data, and the human verdict remain unchanged.

Why this is worth six sessions:
GAiDFLY's promise fails if fluent sparring does the student's thinking. This gate makes that failure testable before prompt changes ship.

Residual risk:
Synthetic transcripts cannot prove that real students develop or transfer better judgment.

---

Done when: `wc -m < your-task-card.md` prints a number ≤ 2000 AND every field above has a non-empty answer AND the check command is pasted verbatim, not described.
