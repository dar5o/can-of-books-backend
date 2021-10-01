'use strict';

const Books = require('./books');
const jwt = require('jsonwebtoken');
const getKey = require('./getKey.js');

const deleteBook = (request, response) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    jwt.verify(token, getKey, {}, async function (err, user) {
      if (err) {
        response.status(500).send('invalid token');
      }
      let id = request.params.id;
      let email = request.query.email;
      if (email === user.email) {
        try {
          let bookDeleted = await Books.findByIdAndDelete(id);
          response.send(bookDeleted);
        } catch (err) {
          res.status(500).send(err)
          console.log(err);
        }

      } else {
        response.send('you are not who you say you are');
      }
    });
  } catch (error) {
    console.log(error);
    response.status(500).send(`error while deleting ${id}`);
  }
}

module.exports=deleteBook;