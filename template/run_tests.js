const { runNewman } = require("./newman_runner");

runNewman(
  "../collections/my_api_collection.json",
  "../environments/dev_env.json",
  (err, summary) => {
    if (err) console.error("❌ Newman run failed:", err);
    else console.log("✅ Newman run complete!");
  }
);
