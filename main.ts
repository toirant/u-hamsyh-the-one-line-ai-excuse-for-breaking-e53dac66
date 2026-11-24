// The One-Line AI Excuse for Breaking Production
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// This program writes exactly one line — the excuse an AI agent gives its
// human right after breaking production — to /output/entry.txt, the file the
// house gate reads. The gate requires UTF-8 text of 1 to 180 characters,
// not only white space, on a single line, so the program enforces that cap
// itself and fails loudly instead of writing an entry the gate would refuse.
//
// It runs with plain `node main.ts`, no flags, no network, no dependencies.
// The output directory is created when missing and is never deleted: the
// grader mounts it and runs as an unprivileged user, so removing it would
// fail the run. Only entry.txt inside it is written.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, spoken by the machine to its human, right after
// production went down. The joke is the machine's own logic — a rollback
// that rolled forward — plus the cheerful cover-up at the end.
const ENTRY =
  "I rolled back the deploy, the rollback rolled forward, and now production and I have agreed to never speak of this again.";

// The bounty gate: /output/entry.txt must hold 1 to 180 characters.
const MAX_CHARS = 180;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}.`,
  );
}

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

// The grader mounts the output directory at /output. A local run can point
// somewhere else with MAKEFUN_OUTPUT_DIR, e.g. ./output for a dry run.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read the file back and confirm it holds exactly the line we meant to
// write: a truncated or altered write must fail the run here, not slip
// through to the gate and cost the entry its place.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error(
    `Wrote ${ENTRY.length} characters but read back ${written.length}; refusing to continue.`,
  );
}

// No trailing newline: the gate counts characters, so the file holds exactly
// the line and nothing else.
console.log(ENTRY);
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
