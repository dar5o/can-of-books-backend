//missing imports
'use strict';
const jwt = require('jsonwebtoken');
const getKey = require('./getKey');
const Books = require('./books');

const updateBooks = (request, response) => {
  const token = request.body.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, getKey, {}, async function (err, user) {
      if (err) {
        response.status(500).send('invalid token');
      }
      let id = request.params.id;
      let { title, description, status, email } = request.body.params;
      if (email === user.email) {
        await Books.findByIdAndUpdate(id, { title, description, status, email }, {new: true, overwrite: true});
        response.send('book updated');
      } else {
        response.send('you are not who you say you are');
      }
    })
  } catch (err) {
    response.status(500).send('database error');
  }
};

module.exports=updateBooks;