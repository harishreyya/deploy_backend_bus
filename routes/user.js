const express = require('express');
const router = express.Router();
const User = require("../models/User");

// creating  a new user

router.post('/',async (req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
});

// get user details;

// router.get('/:id',async (req,res)=>{
//     {
//         try{
//             const user = await User.findById(req.params.id);
//             if(!user){
//                 return res.status(404).send()
//             }
//             res.send(user)
//         }catch(error){
//             res.status(500).send(error)
//         }
//     }
// })

router.get('/',async (req,res)=>{
        {
            try{
                const user = await User.find();
                // if(!user){
                //     return res.status(404).send()
                // }
                res.send(user)
            }catch(error){
                res.status(500).send(error)
            }
        }
    })


module.exports = router;