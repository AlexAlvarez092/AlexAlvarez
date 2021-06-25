/* eslint-disable import/no-dynamic-require */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { join } = require('path');
const bodyParser = require('body-parser');

const articlesRoutes = require(join(__dirname, '../routes/article.router'));
const membersRoutes = require(join(__dirname, '../routes/member.router'));
const adminRoutes = require(join(__dirname, '../routes/admin.router'));
const authRoutes = require(join(__dirname, '../routes/auth.router'));

const app = express();

app.set('port', process.env.PORT);

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use('/api/articles', articlesRoutes);
app.use('/api/members', membersRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

module.exports = app;
