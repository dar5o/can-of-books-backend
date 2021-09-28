'use strict';

const {request, response} = require('express');
const {model} = require('mongoose');
const {userModel, seedFunction} = require('../modules/userModel');

console.log(userModel)

let getBooks = (request, response) => {
  
  userModel.find({}).then((error, data) => {
    if (error) {
      response.send(error)
    } else {
      response.json(data);
    }
    
  })
}

module.exports = getBooks;