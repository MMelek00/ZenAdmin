import { execa } from "execa";
import fs from "node:fs";

const environments = [
  { name: "local", description: "development" },
  { name: "test", description: "staging/QA" },
  { name: "prod", description: "production" },
];

// Create Git-ignored files for environment variable overrides
for (const env of environments) {
  const filename = `./env/.${env.name}.override.env`;

  if (!fs.existsSync(filename)) {
    await fs.writeFile(filename, "utf-8");
  }
}

try {
  await execa("yarn", ["tsc", "--build"], { stdin: "inherit" });
} catch (err) {
  console.error(err);
}
