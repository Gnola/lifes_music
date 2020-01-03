const express = require('express');
const router = express.Router();
const Allsongs = require('../models/allsongsmodel.js')

// C
router.post('/', (req, res) => {
  Allsongs.create(
    req.body,
    (err, createdTest) => {
      res.send(createdTest)
    }
  )
})

// R
router.get('/', (req, res) => {
  Allsongs.find(
    {},
    (err, allSongs) => {
      res.send(allSongs)
    }
  )
})

// U
router.put('/:id', (req, res) => {
  Allsongs.findByIdAndUpdate(
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
  Allsongs.findByIdAndRemove(
    req.params.id,
    (err, deletedTest) => {
      res.send('You deleted this...')
    }
  )
})

module.exports = router;
