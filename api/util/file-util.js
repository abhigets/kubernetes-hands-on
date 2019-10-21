const fs = require('fs');
function deleteFile(resultsFilename) {
  fs.unlink(resultsFilename, err => {
    console.log(err);
  });
  console.log('Delete temp file successfully');
}

function getDataFromFile(resultsFilename) {
  const searchResults = require(`../../${resultsFilename}`);
  return searchResults;
}

function generateFileName() {
  const randomNumber = Math.random();
  const extension = 'json';
  return `data-files/${randomNumber}.${extension}`;
}

module.exports = {
  generateFileName,
  getDataFromFile,
  deleteFile
};
