const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://satyaprakashmishra2312:stya@123@cluster0.kzm2ig2.mongodb.net/FRWA?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db = null;

module.exports = {
  connect: () => {
    return new Promise((resolve, reject) => {
      client.connect((err) => {
        if (err) {
          reject(err);
        } else {
          db = client.db('FRWA');
          resolve(db);
        }
      });
    });
  },
  getDb: () => {
    return db;
  }
};