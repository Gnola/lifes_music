const express = require('express');
const router = express.Router();
const Test = require('../models/testmodel.js')



router.get('/', (req, res) => {
  Test.find(
    {},
    (err, allTests) => {
      res.send(allTests)
    }
  )
})

router.post('/', (req, res) => {
  Test.create(
    req.body,
    (err, createdTest) => {
      res.send(createdTest)
    }
  )
})


module.exports = router;
