'use strict';


const { query } = require('express');
const booksModel = require('../modules/books');

async function getBooks (request, response) {
    const email = {};
    if (request.query.email) {
      email.email = request.query.email;
    }
    const sendBooks = await booksModel.find(email);
    response.send(sendBooks);
}

module.exports = getBooks;