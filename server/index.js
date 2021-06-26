/* eslint-disable import/no-dynamic-require */
const { join } = require('path');
const { readFileSync } = require('fs');
const https = require('https');

require('dotenv').config();

const app = require(join(__dirname, './config/app.config'));

// require(join(__dirname, './config/db.config'));

const httpsServer = https.createServer({
  key: readFileSync(join(__dirname, './ssl/privKey.pem')),
  cert: readFileSync(join(__dirname, './ssl/fullchain.pem')),
}, app);

httpsServer.listen(app.get('port'), () => {
  console.log('HTTPS server running on port', app.get('port'));
});
