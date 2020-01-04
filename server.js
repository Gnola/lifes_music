const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

// Middleware
app.use(bodyParser.json());

// const testController = require('./api/controllers/testcontroller.js')
// app.use('/test', testController)

// const songController = require('./api/controllers/songcontroller.js')
// app.use('/songs', songController)

const allsongsController = require('./api/controllers/allsongscontroller.js')
app.use('/allsongs', allsongsController)



const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false},
  () => {
  console.log('mongoose connected!');
  }
)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(5000, () => {
  console.log(`Listening on port ${PORT}`);
})
