const mongoose = require('mongoose');

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;

mongoose
  .connect(`mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB is connected'))
  .catch((error) => console.log('There was an error while connecting to DB', error));

module.exports = mongoose;
