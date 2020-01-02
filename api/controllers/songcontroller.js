const express = require('express');
const router = express.Router();
const Song = require('../models/songmodel.js')

// C
router.post('/', (req, res) => {
  Song.create(
    req.body,
    (err, createdTest) => {
      res.send(createdTest)
    }
  )
})

// R
router.get('/', (req, res) => {
  Song.find(
    {},
    (err, allTests) => {
      res.send(allTests)
    }
  )
})

// U
router.put('/:id', (req, res) => {
  Song.findByIdAndUpdate(
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
  Song.findByIdAndRemove(
    req.params.id,
    (err, deletedTest) => {
      res.send('You deleted this...')
    }
  )
})

module.exports = router;
