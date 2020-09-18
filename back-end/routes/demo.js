const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Demo = require('../schema/demoschema');
const bookschema = require('../schema/bookschema');
const connect = require('../index');

router.use(express.json());


//posting a demo
router.post('/add-demo',(req,res)=>{
    console.log('demo');

    const demo = new Demo({
        demoid: req.body.demoid,
        title: req.body.question,
        description: req.body.answer,
        file: req.body.user,
        user: req.body.answerdate,
        reviews:req.body.review,
        starcount: req.body.starcount,
        ratedcount: req.body.ratedcount,
        reviewscount: req.body.reviewscount,
        demodate: req.body.demodate
    });

    console.log(req.body);

    demo.save((err,demo)=>{
        if(err) {
            console.log('inside err');
            res.send("Error: "+ err);
        }
        // res.send(user._id);
        res.send(demo);
        console.log('saved!');
    });
    

});


//get api for all demo
router.get('/',async(req,res)=>{
    const demo = await Demo.find();
    console.log(demo);
    res.json({
        data: demo,
        message: "All demos.."
    });
});

//get api for a specific user

router.get('/:id',(req,res)=>{
    Demo.findOne({demoid: req.params.id},(err,demo)=>{
        //check if user exists
    if(!demo) return res.status(404).json({
        data:{},
        message: 'No such book exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:demo,
            message:"Demo fetched!"
        });
    }
    else{
        res.status(404).json({
            data:{},
            message: 'Some unexpected error occurred.'
        });
    }
    });
    
});



module.exports = router;


