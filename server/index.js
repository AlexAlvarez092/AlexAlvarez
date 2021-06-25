/* eslint-disable import/no-dynamic-require */
const { join } = require('path');

require('dotenv').config();

const app = require(join(__dirname, './config/app.config'));

require(join(__dirname, './config/db.config'));

app.listen(app.get('port'), () => {
  console.log(`HTTP server running on port ${app.get('port')}`);
});
