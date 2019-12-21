const express = require('express');
const router = express.Router();
const Test = require('../models/testmodel.js')

// C
router.post('/', (req, res) => {
  Test.create(
    req.body,
    (err, createdTest) => {
      res.send(createdTest)
    }
  )
})

// R
router.get('/', (req, res) => {
  Test.find(
    {},
    (err, allTests) => {
      res.send(allTests)
    }
  )
})

// U
router.put('/:id', (req, res) => {
  Test.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedTest) => {
      res.send(updatedTest)
    }
  )
})


// D
router.delete('/:id', (req, res) => {
  Test.findByIdAndRemove(
    req.params.id,
    (err, deletedTest) => {
      res.send('You deleted this...')
    }
  )
})

module.exports = router;
