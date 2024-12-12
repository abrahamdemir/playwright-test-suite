const fs = require('fs');
const path = require('path');

async function globalTeardown() {
  const testResultsDir = path.join(__dirname, 'test-results');
  if (!fs.existsSync(testResultsDir)) return;

  const files = fs.readdirSync(testResultsDir);

  files.forEach((file) => {
    if (file.endsWith('.webm')) {
      const testName = file.split('-')[0]; // Adjust naming logic as needed
      const newName = `${testName}.webm`;
      fs.renameSync(path.join(testResultsDir, file), path.join(testResultsDir, newName));
    }
  });
}

module.exports = globalTeardown;
