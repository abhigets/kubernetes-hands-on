const cypress = require('cypress');

exports.run = async function(testFile, searchTerm, resultsFilename) {
  await runCypress(testFile, searchTerm, resultsFilename);
};

async function runCypress(testFile, jsonData) {
  await cypress.run({
    spec: `cypress/integration/${testFile}.spec.js`,
    env: jsonData,
    config: {
      video: false
    },
    noExit: true
  });
}
