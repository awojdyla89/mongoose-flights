const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: String,
  arrival: Date,
},{
  timestamps: true
  
})

	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number, 
  departs:  Date, 
   
  destinations: [destinationSchema],

  tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
  
}, {
  timestamps: true
});
	
// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema);
// console.log(Flight);
module.exports = Flight;