'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  description: String,
  status: String,
  email: String,
})

const Books = mongoose.model('books', bookSchema);

module.exports = Books;