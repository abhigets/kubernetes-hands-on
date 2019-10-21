const express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/address-scraper-routes');
routes(app);

app.listen(port);

console.log('scraper app RESTful API server started on: ' + port);
