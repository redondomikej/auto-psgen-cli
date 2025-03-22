const fs = require("fs");
const path = require("path");

const sourceDir = path.resolve("./template"); // Source folder
const targetParentDir = path.resolve("./api-testing"); // Destination folder
const targetDir = path.join(targetParentDir, "template"); // Preserve "template" inside "api-testing"

console.log(`📂 Source Directory: ${sourceDir}`);
console.log(`📂 Target Directory: ${targetDir}`);

// Check if source folder exists
if (!fs.existsSync(sourceDir)) {
  console.error("❌ Source folder does not exist. Exiting...");
  process.exit(1);
}

// Ensure target parent folder exists (api-testing)
if (!fs.existsSync(targetParentDir)) {
  fs.mkdirSync(targetParentDir, { recursive: true });
  console.log("📁 Created parent folder:", targetParentDir);
}

// Ensure the "template" folder exists inside "api-testing"
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log("📁 Created target folder:", targetDir);
}

try {
  fs.cpSync(sourceDir, targetDir, { recursive: true }); // Copy everything into api-testing/template
  console.log("✅ Folder copied successfully!");
} catch (error) {
  console.error("❌ Error copying folder:", error);
}
