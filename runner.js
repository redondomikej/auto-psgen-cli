#!/usr/bin/env node
const { execSync } = require("child_process");

try {
  console.log("🚀 Running 1createStructure.js...");
  execSync("node createStructure.js", { stdio: "inherit" });

  console.log("📂 Running 2template.js...");
  execSync("node template.js", { stdio: "inherit" });

  console.log("⚡ Running 3template_override.js...");
  execSync("node template_override.js", { stdio: "inherit" });

  console.log("🎉 All scripts executed successfully!");
} catch (error) {
  console.error("❌ An error occurred:", error.message);
  process.exit(1);
}
