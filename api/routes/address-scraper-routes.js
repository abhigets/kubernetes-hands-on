const addressScraper = require('../controllers/address-scraper-controller');

module.exports = async function(app) {
  await app.route('/address').get(addressScraper.listAllAddress);
};
