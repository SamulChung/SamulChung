import { existsSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const root = process.cwd();
const targets = ["node_modules", "package-lock.json"];

for (const target of targets) {
  const full = resolve(root, target);
  if (existsSync(full)) {
    rmSync(full, { recursive: true, force: true });
    console.log(`Removed: ${target}`);
  }
}

const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(npmCmd, ["install"], { stdio: "inherit" });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
