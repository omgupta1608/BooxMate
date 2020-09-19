const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('../schema/reviewschema');
const connect = require('../index');
const { request } = require('express');
const {genId,getDate} = require('../routes/function');

router.use(express.json());

//post api for posting reviews
router.post('/add-review',(req,res)=>{
    console.log('review');

    const review = new Review({
        reviewid: genId(6),
        review: req.body.review,
        user: req.body.user,
        reviewdate: req.body.reviewdate
    });

    console.log(req.body);

    review.save((err,review)=>{
        if(err) {
            console.log('inside err');
            res.send("Error: "+ err);
        }
        // res.send(user._id);
        res.send(review);
        console.log('saved!');
    });
    

});

//get api for all review
router.get('/',async(req,res)=>{
    const review = await Review.find({}, (err, data) => {
        //console.log(review);
        res.json({
            data: data,
            message: "All reviews.."
        });
    });
    
});

//get api for a specific review
router.get('/:id',(req,res)=>{
    Review.findOne({ reviewid: req.params.id}, (err, review) => {
        //check if user exists
    if(!review) return res.status(404).json({
        data:{},
        message: 'No such answer exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:review,
            message:"Review fetched!"
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

//review->demo id

router.get('/demoid/:demo',(req,res)=>{
    Review.findOne({demo: req.params.demo},(err,review)=>{
        //check if user exists
    if(!review) return res.status(404).json({
        data:{},
        message: 'No such thing exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:review,
            message:"Fetched!"
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


