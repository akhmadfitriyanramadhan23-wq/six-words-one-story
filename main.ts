// six-words-one-story
// One complete story in exactly six words: fifty years of waiting, then one
// word that turns a whole life — the "no" lands only because the fifty years
// came first. Every word earns its place; what she waited for, and what she
// refused, is left for the reader to fill in.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: exactly 6 words, 1–60 code points (this story: 6 words, 31 points).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "After fifty years, she said no.";

const words = text.trim().split(/\s+/);
const points = [...text].length;
if (words.length !== 6) {
  throw new Error(`entry must be exactly 6 words, got ${words.length}`);
}
if (points < 1 || points > 60 || text.trim().length === 0) {
  throw new Error(`entry must be 1-60 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
