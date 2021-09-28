'use strict';

const Books = require('./books');
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const createBook = async (request, response) => {
 
  try {
    const bookInfo = request.body;
    const newBook = await Books.create({
      title: bookInfo.title,
      description:  bookInfo.description,
      status:  bookInfo.status,
      email:  bookInfo.email,
    });
    response.status(200).send(newBook);
  } catch (error) {
    console.error.apply(error);
    response.status(500).send('server error!');
  }
}

module.exports=createBook;
