# Goal — preserve session evidence

Implement the smallest session-record module that satisfies the fixed Project 1 contract.

Create `working/src/session-record.mjs`. It must create a new session directory and `meta.json` containing an exact JSON snapshot of the supplied seed, read an existing session record without manufacturing missing fields, and refuse to overwrite an existing session. Change no other implementation file.

Begin by reading the contract, rider, and protected test. Propose a short plan before editing. Run the named check, report its exact result, and stop without claiming release; the independent gate and human release owner decide completion.
