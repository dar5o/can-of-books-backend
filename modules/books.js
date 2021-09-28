'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  Books: Array,
})

const booksModel = mongoose.model('books', bookSchema);

let seedFunction = () => {

  let newbooks = new booksModel({
    Books:[{
      title: "Unconditional Preaching of the Elves (Elven religion and pantheon)",
      description: "This book is a written body of teachings of a specific religious organization. This book is leafed through, but otherwise good condition. It is written in Common Speech. It is part of a series of 10 volumes.",
      status: "available",
      email: 'vitortedario@gmail.com',
      id:1

    },
    {
      title: "Great Properties of Performing",
      description: "This book is meant to teach a person a specific skill. This could be used as a permanent or temporary stat increase if read and studied. This book is leafed through, but otherwise good condition. It is written in Common Speech. It is embossed in large letters on cover.",
      status: "notavailable",
      email: 'vitortedario@gmail.com',
      id:2
    },
    {
      title: "Library Book of Libraries: A photo book showing a series of decrepit bookshelves, along with locations.",
      description: "This book is a little more eye-catching than most other mundane books. This book is leafed through, but otherwise good condition. It is written in Common Speech. It is a very thin book.",
      status: "notavailable",
      email: 'jacob.gregor@outlook.com',
      id:3
      
    },]
  })
  newbooks.save()
  console.log(newbooks)
}
seedFunction();
module.exports = booksModel