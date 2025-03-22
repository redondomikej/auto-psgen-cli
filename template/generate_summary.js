const fs = require("fs");
const { parse } = require("json2csv");

const reportPath = "../reports/newman-report.json";
const summaryPath = "../reports/summary_report.csv";

if (!fs.existsSync(reportPath)) {
  console.error("❌ Error: Newman report not found.");
  process.exit(1);
}

const reportData = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const summary = reportData.run.executions.map((exec) => ({
  requestName: exec.item.name,
  status: exec.response.code,
  responseTime: exec.response.responseTime,
  assertionsPassed: exec.assertions.filter((a) => a.passed).length,
  assertionsFailed: exec.assertions.filter((a) => !a.passed).length,
}));

fs.writeFileSync(summaryPath, parse(summary), "utf8");
console.log("✅ Summary report saved:", summaryPath);