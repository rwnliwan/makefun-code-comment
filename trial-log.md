# Trial log — makefun-code-comment (batch-10prog builder 2)

- Program: `u-mfnakmal-the-comment-above-the-code-35e38026` — "The Comment Above the Code"
- Prize: $2 (pool, top 10) — deadline 26 Nov 2026 23:25 WITA (15:25 UTC)
- Gate: `/output/entry.txt`, UTF-8 text, 1–200 characters
- Kit: fresh download 26 Nov 2026 ~17:00 WITA; kit.json bundle_sha256
  `0dbe7414783e13cf4a754a308fb8f1ce78169bec27101340530c391e835caaf3`
  matches live API — MATCH yes
- Entry text: `// Jenga: this is the bottom block, and the tower is payroll.`
- Entry length: 61 characters (Python len())

## Angle research (titles-2.txt, case-insensitive grep, titles read)

- Saturated, rejected: "load bearing" 17 ("load bearing sleep" 6),
  "tests pass because" 4, "do not touch/refactor" ~20, "since 2019" family,
  "payroll" 6 as a bare noun, "Dave" 3, "person who left" family.
- Fresh, verified 0 hits: jenga 0, "house of cards" 0, scaffold 0, rust 0,
  "bottom block" 0, tower 0, "falls apart" 0, "structural" 0.
- Chosen: Jenga — a structural metaphor other than the saturated load-bearing
  one, with a concrete truth (payroll rests on this block) and the payoff on
  the last word. Self-dup vs batch-9 entries: none use Jenga, payroll, tower,
  or a structural metaphor.
- Runner-up kept out: rust ("The rust is structural. Remove it and this falls
  apart.", 58 kar) — rejected because "rust" reads ambiguously as the Rust
  language inside a codebase comment; Jenga is unambiguous.

## Trials

| version | change | bundle | check |
|---------|--------|--------|-------|
| v1 | initial build: main.ts + README (3 live badges) + LICENSE MIT + owner.json + trial-log | bundle-v1.tar.gz, 198.428 B, sha256 `05013f10e82941f51c246f2a9d6d66f72aae06a7398991b59ca37a0a8b737871` | 12 passed / 2 failed / 5 skipped: FAIL thinking_priced (0 usage rows — subagent rows flush at run end, coordinator re-bundle) + FAIL thinking_revised (every file written once); reproduces 95,3% (41/43 lines authored); local run: /output/entry.txt = 61 chars, exact |
| v2 | genuine revision of this trial-log with the real v1 bundle/check numbers above, re-commit + re-bundle + re-check | (pending) | (pending) |
