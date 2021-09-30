'use strict';


const Books = require('../modules/books');

async function getBooks (request, response) {
  try {
    if (request.query.email) {
      let email = request.query.email;
      console.log(request.query);
      const sendBooks = await Books.find({email});
      response.send(sendBooks);
    } else {
      let allBook = await Books.find({})
      response.send(allBook);
    }
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = getBooks;