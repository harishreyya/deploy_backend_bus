const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
  busNumber:{
    type:String,
    required:true,
  },
  seatsAvailable:{
    type:Number,
    required:true,
  },
  departureTime:{
type:Date,
required:true
  },
  arrivalTime:{
    type:Date,
    required:true
      },
      pricePerSeat:{
        type:Number,
        require:true
      },
    category:{
type:String,
required:true,
enum:['AC','Sleeper']
    }
});

module.exports = mongoose.model('Bus',busSchema)