const express = require('express');
const mongoose = require('mongoose');

const allsongsSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  mood: String,
  energy: String,
  where: String,
  what: String,
})


const Allsongs = mongoose.model('Allsong', allsongsSchema);
module.exports = Allsongs
