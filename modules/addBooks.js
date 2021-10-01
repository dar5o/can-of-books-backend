'use strict';

const Books = require('./books');
const jwt = require('jsonwebtoken');
const getKey = require('./getKey.js');


const createBook =  (request, response) => {
  const token = request.body.headers.authorization.split(' ')[1];
  try {
    jwt.verify(token, getKey, {}, async function (err, user){
      if (err) {
        response.status(500).send('invalid token');
      }
      let {title, description, status, email } = request.body.params;
      let newBook = {title, description, status, email};
      if (email === user.email) {

        let addedBook = new Books(newBook);
        await addedBook.save();
        res.send(addedBook);
      } else {
        res.send('you are not who you say you are');
      }
    });
  
  } catch (error) {
    console.error.apply(error);
    response.status(500).send('server error!');
  }
};

module.exports=createBook;
