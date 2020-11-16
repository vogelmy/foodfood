const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://moses770:moses770@cluster0.fyazi.mongodb.net/lions', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connected")
  // we're connected!
});

module.exports = db;