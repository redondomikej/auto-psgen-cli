const path = require("path");
const fs = require("fs-extra");

const targetDir = path.join(process.cwd(), process.argv[2] || "api-testing");
const sourceTemplate = path.join(__dirname, "template");
const destinationTemplate = path.join(targetDir, "template"); // Create `template/` inside `api-testing/`

console.log(`📂 Creating project in: ${targetDir}`);

// Ensure the main project directory exists
fs.mkdirSync(targetDir, { recursive: true });

// Copy the whole `template` folder into `api-testing/template`
if (fs.existsSync(sourceTemplate)) {
  fs.copySync(sourceTemplate, destinationTemplate, { overwrite: true });
  console.log("✅ Template folder copied successfully inside the project!");
} else {
  console.log("⚠️ Template folder not found. Make sure it exists.");
}
