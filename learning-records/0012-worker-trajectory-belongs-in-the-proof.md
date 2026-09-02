# Worker trajectory belongs in the proof

Jack recognized that the worker's inputs, tool actions, policy decisions, operator interventions, and resulting changes are the guts of what the run must make inspectable. A durable gate-only event log can prove the final candidate passed while remaining unable to reconstruct how it was produced, so future control-plane work should treat worker-trajectory coverage as required evidence rather than optional diagnostics.

## Evidence

After finding that Project 1's `events.jsonl` contained only `run.requested`, `gate.result`, and `run.completed`, Jack explicitly chose to include the missing middle-of-run coverage.

## Implications

Do not treat persistence mechanics as adequate event coverage. Project 2 should define the minimum reconstructable trajectory and make completion refuse or remain incomplete when the required worker trace is absent.
