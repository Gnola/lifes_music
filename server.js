const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

// Middleware
app.use(bodyParser.json());


const testController = require('./api/controllers/testcontroller.js')
app.use('/', testController)





const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false},
  () => {
  console.log('mongoose connected!');
  }
)


app.listen(5000, () => {
  console.log(`Listening on port ${PORT}`);
})
