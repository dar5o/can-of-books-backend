'use strict';

const Books = require('./books');
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const deleteBook = async(request, response) => {
  let id = request.params.id
  try {
    await Books.findByIdAndDelete(id);
    response.status(202).send('successfully deleted');

  } catch (error) {
    console.log(error);
    response.status(500).send(`error while deleting ${id}`);
  }
}

module.exports=deleteBook;