'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./controller/bookController');

const app = express();

app.use(cors());

const PORT = process.env.PORT;
const MONGO_SERVER = process.env.DATABASE_MONGO_SERVER;

mongoose.connect(MONGO_SERVER);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection: error: "));
db.once("open", function () {
  console.log("connection succesful");
});


app.get('/test', (request, response) => {
  
  response.send('test request received')

})

app.get('/books', getBooks);

  

app.listen(PORT, () => console.log(`listening on ${PORT}`));
