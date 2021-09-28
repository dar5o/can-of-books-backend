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

  let newbook1 = new Books({
      title: "Monty Python",
      description: "brits",
      status: "notavailable",
      email: 'bryce@me.com',
    });
  newbook1.save()
  console.log(newbook1)

  
  let newbook2 = new Books({
      title: 'Dream Big ',
      description: 'Find and reach your biggest dreams. Bob Goff, the New York Times bestselling author of Love Does and Everybody, Always, is on a mission to help you recapture the version of your lives you dreamed about',
      status: 'available',
      email: 'dv@yahoo.com'
    });
  newbook2.save()
}
seedFunction();
module.exports = Books;