const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking')

router.post('/',async (req,res)=>{
    try{
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
    }catch(error){
        res.status(400).send(error)
    }
})


// router.get('/', async (req,res)=>{
//     try{
//         const {user,journeyDate} = req.query;
//         const busDetails = await Bus.find({user,journeyDate});
//         res.send( busDetails)
//     }catch(error){
// res.status(500).send(error)
//     }
// })

router.get('/',async (req,res)=>{
    {
        try{
            const booking = await Booking.find();
           
            res.send(booking)
        }catch(error){
            res.status(500).send(error)
        }
    }
})

module.exports = router;