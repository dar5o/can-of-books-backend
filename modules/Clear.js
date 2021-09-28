const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_MONGO_SERVER);

const booksModel = require('./books');

async function clear() {
  try {
    await booksModel.deleteMany({});
    console.log('Books cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();
