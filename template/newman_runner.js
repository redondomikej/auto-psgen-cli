const newman = require("newman");

function runNewman(collection, env, callback) {
  newman.run(
    {
      collection: require(collection),
      environment: require(env),
      reporters: ["cli", "json", "html"],
      reporter: {
        json: { export: "../reports/newman-report.json" },
        html: { export: "../reports/newman-report.html" },
      },
    },
    callback
  );
}

module.exports = { runNewman };
