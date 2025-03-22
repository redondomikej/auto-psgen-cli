const fs = require("fs");
const path = require("path");

// Define project structure
const structure = {
  "api-testing/collections/": [
    "my_api_collection.json",
    "another_collection.json",
  ],
  "api-testing/data/": ["test_data.csv", "test_data.json"],
  "api-testing/environments/": ["dev_env.json", "qa_env.json", "prod_env.json"],
  "api-testing/reports/": ["newman-report.html", "newman-report.json"],
  "api-testing/scripts/tests/": [
    "run_tests.js",
    "scenario1_test.js",
    "scenario2_test.js",
  ],
  "api-testing/scripts/utils/": [
    "newman_runner.js",
    "file_helper.js",
    "data_parser.js",
  ],
  "api-testing/scripts/reports/": ["generate_report.js", "generate_summary.js"],
  "api-testing/scripts/docker/": ["docker_setup.js", "docker_run.js"],
  "api-testing/cicd/": ["Jenkinsfile", "run_tests.sh"],
};

// Function to read template files
function getTemplate(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    return ""; // Return empty if template not found
  }
}

// Function to create project structure
function createProjectStructure() {
  Object.entries(structure).forEach(([dir, files]) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📂 Created directory: ${dir}`);
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      if (!fs.existsSync(filePath)) {
        const templatePath = `templates/${dir
          .replace("api-testing/scripts/", "")
          .replace("api-testing/", "")
          .replace(/\/$/, "")}/${file}`;
        fs.writeFileSync(filePath, getTemplate(templatePath), "utf8");
        console.log(`📄 Created file: ${filePath}`);
      }
    });
  });

  // Create root-level files
  const rootFiles = [
    ".gitignore",
    "package.json",
    "README.md",
    "dependencies.txt",
    "devDependencies.txt",
    "run_dependencies.txt",
  ];
  rootFiles.forEach((file) => {
    const filePath = path.join("api-testing", file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, getTemplate(`templates/root/${file}`), "utf8");
      console.log(`📄 Created file: ${filePath}`);
    }
  });

  console.log("✅ API testing structure created successfully!");
}

// Run the setup function
createProjectStructure();
