# API Testing Automation

This project automates API testing using **Newman** (Postman CLI) with Data-Driven Testing to execute test cases efficiently and generate reports.

## 📌 Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later recommended)
- [Newman](https://www.npmjs.com/package/newman) (Postman CLI for running collections)
- [Newman Reporter](https://www.npmjs.com/package/newman-reporter-html) (for generating reports)
- A valid **Postman Collection** exported as a JSON file
- A **Data File** (CSV/JSON) containing test cases

## 📦 Installation

To install the required dependencies, run the following command:

```sh
npm install -g newman newman-reporter-html
```

## 🚀 Running API Tests

### 1️⃣ Basic Test Execution

To execute a Postman Collection without data-driven testing:

```sh
newman run <your-collection.json>
```

### 2️⃣ Running with Environment Variables

If your API requires an environment file:

```sh
newman run <your-collection.json> -e <your-environment.json>
```

### 3️⃣ Running Tests with Data File (Data-Driven Testing)

To execute tests with dynamic data from a CSV or JSON file:

```sh
newman run <your-collection.json> -d <test-data.csv>
```

### 4️⃣ Generating an HTML Report

To generate a detailed HTML report of test results:

```sh
newman run <your-collection.json> -d <test-data.csv> -r html --reporter-html-export report.html
```

## 📊 Test Reporting

Newman provides various reporting formats:

- **CLI Report:** Default console output
- **HTML Report:** A visually detailed summary (`report.html`)
- **JSON Report:** Structured report output (`report.json`)
- **JUnit Report:** XML-based test results (`report.xml`)

To specify a different report format:

```sh
newman run <your-collection.json> -r cli,json,junit --reporter-json-export report.json --reporter-junit-export report.xml
```

## 🔄 Automating API Testing with CI/CD

To integrate Newman into your CI/CD pipeline (Jenkins, GitHub Actions, GitLab CI, etc.), add a command in your pipeline script:

### **Example for GitHub Actions**

```yaml
jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3
      - name: Install Newman
        run: npm install -g newman
      - name: Run API Tests
        run: newman run <your-collection.json> -d <test-data.csv> -r html --reporter-html-export report.html
      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: API Test Report
          path: report.html
```

## 🛠 Troubleshooting

**Issue:** `newman: command not found`

- Ensure you have installed Newman globally (`npm install -g newman`).
- Run `newman -v` to check if it's installed correctly.

**Issue:** API requests failing due to authentication

- Verify that your environment variables are set correctly.
- Check API keys and authentication headers.

**Issue:** CSV data not being used

- Ensure your CSV file is formatted correctly (headers must match Postman variables).
- Use JSON format if CSV parsing issues occur.

## 👤 Author

- **Mike EJ Redondo**
  🚀 Passionate about automation and API testing!
  📧 [redondomikej@gmail.com
  📞 Mobile: 09169045914
  🔗 ]()[LinkedIn Profile](https://www.linkedin.com/in/mike-e-j-redondo-735977209/)
  🏠 Location: Philippines

---

Now you’re ready to automate and streamline your API testing process! 🚀

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
