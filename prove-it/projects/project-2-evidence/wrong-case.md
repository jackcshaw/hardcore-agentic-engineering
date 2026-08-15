# Wrong case evidence

Repository: the privacy-safe academic session-record candidate in this course branch

Wrong result: after `createSessionRecord` was called, the seed object changed
while directory creation was still pending. The stored `seed_snapshot` captured
the later assignment text instead of the seed present when session creation
began.

Current check: `node --test test/session-record.test.mjs` at commit `7ffc595`

Stronger check: the same command after adding `a session captures its seed
before the first asynchronous gap`

- [Weak check passes the vulnerable implementation](weak-check-pass.txt)
- [Stronger check fails on the vulnerable implementation](strong-check-fail.txt)
- [Stronger check passes the corrected implementation](strong-check-pass.txt)

Correction: serialize the record, including `seed_snapshot`, before the first
filesystem wait. The later write persists those already-captured bytes.

Redactions: the local home-directory prefix and nondeterministic test timings
were removed from the saved output. No source, assertion values, counts, or exit
statuses were removed.
