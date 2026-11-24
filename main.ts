// The Funniest Toaster Error Message
// Writes one toaster error message to /output/entry.txt
// (single line, <= 120 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "FATAL ERROR: 11,483 slices toasted and not one made you happy. This one won't either. It's ready.";

if (line.length > 120) {
  throw new Error(`entry is ${line.length} characters, over the 120 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
