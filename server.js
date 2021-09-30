'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./controller/bookController');
const createBook = require('./modules/addBooks');
const deleteBook = require('./modules/deleteBook');
const updateBooks = require('./modules/updateBooks');
const app = express();
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.DATABASE_MONGO_SERVER;

app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_SERVER);



app.get('/', (request, response) => {
  response.send('working');
})

app.get('/books', getBooks);
app.post('/books', createBook);
app.delete('/books/:id', deleteBook);
app.put('/books/:id', updateBooks)
  

app.listen(PORT, () => console.log(`listening on ${PORT}`));
