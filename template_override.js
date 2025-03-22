const fs = require("fs");
const path = require("path");

// Function to overwrite content from a source file to a target file
function overwriteFileTemplate(sourcePath, targetPath) {
  if (fs.existsSync(sourcePath)) {
    const content = fs.readFileSync(sourcePath, "utf8"); // Read the source file

    // Ensure the target directory exists before writing the file
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetPath, content, "utf8"); // Overwrite the content
    console.log(`✏️  Overwritten content from ${sourcePath} to ${targetPath}`);
  } else {
    console.warn(`⚠️  Source file not found: ${sourcePath}, skipping.`);
  }
}

// List of files to overwrite (source → target)
const filesToOverwrite = [
  {
    source: "./api-testing/template/README.md",
    target: "api-testing/README.md",
  },
  {
    source: "./api-testing/template/package.json",
    target: "api-testing/package.json",
  },
  {
    source: "./api-testing/template/.gitignore",
    target: "api-testing/.gitignore",
  },
  {
    source: "./api-testing/template/dependencies.txt",
    target: "api-testing/dependencies.txt",
  },
  {
    source: "./api-testing/template/devDependencies.txt",
    target: "api-testing/devDependencies.txt",
  },
  {
    source: "./api-testing/template/run_dependencies.txt",
    target: "api-testing/run_dependencies.txt",
  },
  {
    source: "./api-testing/template/generate_summary.js",
    target: "api-testing/scripts/reports/generate_summary.js",
  },
  {
    source: "./api-testing/template/newman_runner.js",
    target: "api-testing/scripts/utils/newman_runner.js",
  },
  {
    source: "./api-testing/template/run_tests.js",
    target: "api-testing/scripts/tests/run_tests.js",
  },
];

// Function to overwrite multiple files dynamically
function overwriteMultipleFiles() {
  filesToOverwrite.forEach(({ source, target }) => {
    overwriteFileTemplate(source, target);
  });

  console.log("✅ All template files overwritten successfully!");
}

// Run the script
overwriteMultipleFiles();
