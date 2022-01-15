const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/homequestdb");

const db = mongoose.connection;

db.on('error', () => {
  console.log('Error connecting to the database');
})
db.once('open', () => {
  console.log('Database connnected');
})

module.exports = db;