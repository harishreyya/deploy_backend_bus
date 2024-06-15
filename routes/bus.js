const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

router.post('/',async (req,res)=>{
    try{
        const bus = new Bus(req.body);
        await bus.save();
        res.status(201).send(bus);
    }catch(error){
        res.status(400).send(error)
    }
})

// router.get('/', async (req,res)=>{
//     try{
//         const {departureTime,arrivalTime} = req.query;
//         const buses = await Bus.find({departureTime,arrivalTime});
//         res.send(buses)
//     }catch(error){
// res.status(500).send(error)
//     }
// })

router.get('/',async (req,res)=>{
    {
        try{
            const bus = await Bus.find();
            res.send(bus)
        }catch(error){
            res.status(500).send(error)
        }
    }
})

module.exports = router;