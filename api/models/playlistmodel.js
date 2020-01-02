const express = require('express');
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  title: String,
  description: String,
  songList: [String]
})


const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist
