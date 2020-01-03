const express = require('express');
const router = express.Router();
const Songs = require('../models/songmodels.js')

// C
router.post('/', (req, res) => {
  Songs.create(
    req.body,
    (err, createdTest) => {
      res.send(createdTest)
    }
  )
})

// R
router.get('/', (req, res) => {
  Songs.find(
    {},
    (err, allSongs) => {
      res.send(allSongs)
    }
  )
})

// U
router.put('/:id', (req, res) => {
  Songs.findByIdAndUpdate(
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
  Songs.findByIdAndRemove(
    req.params.id,
    (err, deletedTest) => {
      res.send('You deleted this...')
    }
  )
})

module.exports = router;
