const { Schema, model } = require('mongoose');

const ResumeSchema = new Schema({
  title: String,
  type: String,
  dates: String,
  issuer: String,
  description: String,
});

module.exports = model('Resume', ResumeSchema);
