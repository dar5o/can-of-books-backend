'use strict';


const Books = require('../modules/books');

async function getBooks (request, response) {
    const email = {};
    if (request.query.email) {
      email.email = request.query.email;
    }
    const sendBooks = await Books.find(email);
    response.send(sendBooks);
}

module.exports = getBooks;