const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class


const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
});
	
// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema);
// console.log(Flight);
module.exports = Flight;