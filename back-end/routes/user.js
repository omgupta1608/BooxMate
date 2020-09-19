const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../schema/userschema');
const connect = require('../index');

router.use(express.json());

router.post('/add-user',(req,res)=>{
    console.log('user');

<<<<<<< Updated upstream
=======
    const user = new User({
        userid: req.body.userid,
        uname: req.body.uname,
        upassword: req.body.upassword,
        contact: req.body.contact,
        uemail: req.body.uemail,
        profilepic: req.body.profilepic
    });

    console.log(req.body);

    answer.save((err,answer)=>{
        if(err) {
            console.log('inside err');
            res.send("Error: "+ err);
        }
        // res.send(user._id);
        res.send(answer);
        console.log('saved!');
    });
    

});

>>>>>>> Stashed changes
//get api for all user
router.get('/',async(req,res)=>{
    const user = await User.find().exec((err,user) => {
        if(!err){
            console.log(user);
            res.json({
                data: user,
                message: "All users.."
            });
        }
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


