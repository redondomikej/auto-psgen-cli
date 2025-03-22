#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");

const scriptDir = __dirname; // Get the directory where this script is installed

try {
  console.log("🚀 Running createStructure.js...");
  execSync(`node "${path.join(scriptDir, "createStructure.js")}"`, {
    stdio: "inherit",
  });

  // console.log("📂 Running template.js...");
  // execSync(`node "${path.join(scriptDir, "template.js")}"`, {
  //   stdio: "inherit",
  // });

  // console.log("⚡ Running template_override.js...");
  // execSync(`node "${path.join(scriptDir, "template_override.js")}"`, {
  //   stdio: "inherit",
  // });

  console.log("🎉 All scripts executed successfully!");
} catch (error) {
  console.error("❌ An error occurred:", error.message);
  process.exit(1);
}
