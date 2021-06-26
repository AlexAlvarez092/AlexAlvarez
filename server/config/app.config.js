/* eslint-disable import/no-dynamic-require */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
// const { join } = require('path');
const bodyParser = require('body-parser');

// const apiRouter = require(join(__dirname, '../routes/api.router'));

const app = express();

app.set('port', process.env.PORT);

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
// app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = app;
