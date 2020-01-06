const express = require('express');
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  energy: String,
  weight: String,
  what: String,
  where: []
})


const Song = mongoose.model('Song', songSchema);
module.exports = Song
