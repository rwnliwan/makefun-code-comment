import { mkdirSync, writeFileSync } from "node:fs";

// Jenga: this is the bottom block, and the tower is payroll.
const ENTRY = "// Jenga: this is the bottom block, and the tower is payroll.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
