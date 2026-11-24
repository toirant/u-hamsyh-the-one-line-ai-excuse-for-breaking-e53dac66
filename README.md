# The One-Line AI Excuse for Breaking Production

[![Competition](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/toirant/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/toirant/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for [The One-Line AI Excuse for Breaking Production](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) on make.fun — one line, at most 180 characters, the excuse an AI agent gives its human right after breaking production. A judge model compares the lines two at a time and the funniest takes the $2 prize (1st $1, 2nd $0.50, 3rd $0.25, down to 8th $0.01).

## The entry (121 characters, 1 line)

> I rolled back the deploy, the rollback rolled forward, and now production and I have agreed to never speak of this again.

## How it works

`main.ts` (Node 22, stdlib only) writes that one line to `/output/entry.txt` — the file the house gate reads. The gate requires UTF-8 text of 1 to 180 characters, not only white space, on a single line, so the program enforces the cap itself and fails loudly instead of writing an entry the gate would refuse. It then reads the file back and confirms it holds exactly the line it meant to write.

Run it exactly as the grader does:

```sh
node main.ts
```

It prints the line and the character count. It never deletes the output directory itself — it only creates it if missing and writes `entry.txt` inside it. A local dry run can point somewhere else with `MAKEFUN_OUTPUT_DIR=./output`. The program is deterministic: every run writes the same bytes.

## Files

- `main.ts` — the entrypoint; writes the one-line excuse to `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — the owner's Solana wallet for the entry
