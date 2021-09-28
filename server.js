'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./controller/bookController');
const app = express();
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.DATABASE_MONGO_SERVER;

app.use(cors());

mongoose.connect(MONGO_SERVER);



app.get('/', (request, response) => {
response.send('working')
})

app.get('/books', getBooks);

  

app.listen(PORT, () => console.log(`listening on ${PORT}`));
