'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./bookModel');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  books: Array,
})

const userModel = mongoose.model('users', userSchema);

let seedFunction = () => {

  let bookslist = new bookSchema (
    {
      title: "Unconditional Preaching of the Elves (Elven religion and pantheon)",
      description: "This book is a written body of teachings of a specific religious organization. This book is leafed through, but otherwise good condition. It is written in Common Speech. It is part of a series of 10 volumes.",
      status: "available"

    },
    {
      title: "Great Properties of Performing",
      description: "This book is meant to teach a person a specific skill. This could be used as a permanent or temporary stat increase if read and studied. This book is leafed through, but otherwise good condition. It is written in Common Speech. It is embossed in large letters on cover.",
      status: "notavailable"
    },
    {
      title: "Library Book of Libraries: A photo book showing a series of decrepit bookshelves, along with locations.",
      description: "This book is a little more eye-catching than most other mundane books. This book is leafed through, but otherwise good condition. It is written in Common Speech. It is a very thin book.",
      status: "notavailable"
    },
  
  )
  let user1 = new userModel({
    email: 'vitortedario@gmail.com',
    books: bookslist
  })
  user1.save()
  console.log(user1)
}

module.exports = {userModel, seedFunction};