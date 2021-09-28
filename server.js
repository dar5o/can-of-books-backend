'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./controller/bookController');
const {seedFunction} = require('./modules/books');

const app = express();

app.use(cors());

const PORT = process.env.PORT;
const MONGO_SERVER = process.env.DATABASE_MONGO_SERVER;

mongoose.connect(MONGO_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});



app.get('/', (request, response) => {
  
  response.send('working')

})

app.get('/books', getBooks);

  

app.listen(PORT, () => console.log(`listening on ${PORT}`));
