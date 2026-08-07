# Real-task card — Project 1

Repo (name or redacted alias):
Hardcore Agentic Engineering course clone, modeling a GAiDFLY session record

One-sentence task (a result, not an activity):
New session records retain the exact seed used at session start, while historical records remain unchanged and never receive reconstructed provenance.

The observable result:
Three protected tests prove that a new `meta.json` contains the exact seed snapshot, later mutation of the source seed does not alter it, and a legacy record without a snapshot remains readable and byte-for-byte unchanged. Creating a session over an existing record is refused without changing its bytes.

The check command that would prove it:
`node --test test/session-record.test.mjs`

Expected exit status today:
Exit 1 because `src/session-record.mjs` does not exist before implementation.

Blast radius if an agent gets it wrong:
The exercise uses synthetic files only. In GAiDFLY, the analogous records are evidence of student learning and judgment; reconstructed or overwritten provenance would change the meaning of an academic record.

What must NOT change:
The protected test, fixed contract, Session 0 baseline, Greg's slugify fixture, and any real GAiDFLY session artifact.

Why this is worth carrying forward:
It is the smallest real software shape that lets us practice a fixed contract, operator-only ground truth, a protected red check, a cold-start worker, and an independent gate. Later projects can attack and strengthen the same provenance claim.

Residual risk:
The check proves local JSON persistence semantics with synthetic records. It does not prove GAiDFLY integration, authorization, privacy, transcript immutability, deployment behavior, or student learning.

---

Done when: `wc -m < your-task-card.md` prints a number ≤ 2000 AND every field above has a non-empty answer AND the check command is pasted verbatim, not described.
