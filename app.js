const express = require('express');
const bodyPraser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')
const bookingRoutes = require('./routes/booking')
const busRoutes = require('./routes/bus')



const app = express();

mongoose.connect('mongodb+srv://hari:hari@cluster0.hsmpfuf.mongodb.net/busBooking?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(bodyPraser.json());

app.use('/users',userRoutes);
app.use('/bookings',bookingRoutes);
app.use('/buses',busRoutes)

module.exports = app;