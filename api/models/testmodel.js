const express = require('express');
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: String,
  des: String
})


const Test = mongoose.model('Test', testSchema);
module.exports = Test
