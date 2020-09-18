const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../schema/userschema');
const connect = require('../index');

router.use(express.json());



//get api for all user
router.get('/',async(req,res)=>{
    const user = await User.find();
    console.log(user);
    res.json({
        data: user,
        message: "All users.."
    });
});

//get api for a specific user
router.get('/:id',(req,res)=>{
    User.findById(req.params.id, (err, user));
    //check if user exists
    if(!user) return res.status(404).json({
        data:{},
        message: 'No such user exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:user,
            message:"User fetched!"
        });
    }
    else{
        res.status(404).json({
            data:{},
            message: 'Some unexpected error occurred.'
        });
    }
});


module.exports = router;


