const express = require('express');
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  mood: String,
  energy: String,
  where: String,
  what: String,
})


const Songs = mongoose.model('Song', songSchema);
module.exports = Songs
