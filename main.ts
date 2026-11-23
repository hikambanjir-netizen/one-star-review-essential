// One-star review of something essential.
// Writes a single deadpan one-star review line to /output/entry.txt.
// Node 22, standard library only. No network, no model calls, no keys.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. I pay sleep eight hours every night and wake up still owing it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be exactly one non-blank line of 1-160 characters,
// written with no trailing newline, or the run fails loudly.
const chars = [...REVIEW];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`entry is ${chars.length} chars, must be 1-160`);
}
if (REVIEW.trim().length === 0 || /[\r\n]/.test(REVIEW)) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`wrote ${chars.length} chars to ${join(outDir, "entry.txt")}`);
