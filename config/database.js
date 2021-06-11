const mongoose = require('mongoose');
// connecting to the mongodb server
// /flights is our database name, if it a db exists we connect
// otherwise it creates a database of said name
mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log('Connected to MongooDB');
});