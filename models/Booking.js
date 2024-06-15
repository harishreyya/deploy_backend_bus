const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
   user:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
   },
   bus:{
    type:Schema.Types.ObjectId,
    ref:'Bus',
    required:true
   },
   seats:[{
type:Number,
required:true
   }],
   totalAmount :{
    type:Number,
    required:true
   },
   bookingDate:{
    type:Date,
    default:Date.now
},
journeyDate:{
    type:Date,
   required:true
}
});

module.exports = mongoose.model('Booking',bookingSchema)