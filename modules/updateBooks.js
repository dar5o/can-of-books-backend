//missing imports
'use strict';

const Books = require('./books');

const updateBooks = async (request, response) => {
  let id = request.params.id;
  try {
    const updatedBook = await Books.findByIdAndUpdate(id, {...request.body}, {new: true});
    response.status(201).send(updatedBook);
  } catch (err) {
    console.log(err);
    response.status(400).send('failed to update');

  }
};

module.exports=updateBooks;