const {
  deleteFile,
  getDataFromFile,
  generateFileName
} = require('../util/file-util');
const scraper = require('../util/scraper-integration');

exports.listAllAddress = async function(req, res) {
  const searchTerm = req.query.searchTerm;
  const resultsFilename = generateFileName();

  const dataToScrapper = {
    searchTerm,
    resultsFilename
  };
  await scraper.run('address', dataToScrapper);

  const searchResults = getDataFromFile(resultsFilename);
  deleteFile(resultsFilename);

  res.json({ searchTerm, searchResults });
};
