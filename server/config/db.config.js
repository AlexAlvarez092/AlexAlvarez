const { MongoClient } = require('mongodb');
const { join } = require('path');
const { readFileSync } = require('fs');

const mongoHost = process.env.DB_HOST;
const mongoDB = process.env.DB_DATABASE;
const mongoCollection = process.env.DB_COLLECTION;
const mongoSSL = readFileSync(join(__dirname, '../ssl/mongodb.pem'));

const client = new MongoClient(`${mongoHost}/${mongoDB}?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`, {
  sslKey: mongoSSL,
  sslCert: mongoSSL,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

async function run() {
  try {
    await client.connect();
    const database = mongoDB;
    const collection = mongoCollection;

    console.log('Database connected');

    return { database, collection };
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
const { database, collection } = run().catch(console.dir);

module.exports = { client, database, collection };
