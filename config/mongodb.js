const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL || 'mongodb://jabar:maskil52@localhost:27017?authSource=admin';

const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log('Successfully connected!');
  } catch (e) {
    console.log(e);
  }
})();

const db = client.db(process.env.DB);

module.exports = db;
