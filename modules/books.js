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

let seedFunction = () => {

  let newbooks = new Books({
      title: "Monty Python",
      description: "brits",
      status: "notavailable",
      email: 'bryce@me.com',
    });
  newbooks.save()
  console.log(newbooks)
}
seedFunction();
module.exports = Books 