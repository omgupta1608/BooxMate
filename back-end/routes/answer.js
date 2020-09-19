const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Answer = require('../schema/answerschema');
const connect = require('../index');
const {genId,getDate} = require('../routes/function');
router.use(express.json());


//post api
//adding a answer
router.post('/add-answer',(req,res)=>{
    console.log('answer');

    const answer = new Answer({
        answerid: genId(6),
        question: req.body.question,
        answer: req.body.answer,
        user: req.body.user,
        answerdate: getDate()
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

//get api for all answer
router.get('/',async(req,res)=>{
    const answer = await Answer.find();
    console.log(answer);
    res.json({
        data: answer,
        message: "All answers.."
    });
});

//get api for a specific answer
router.get('/:id',(req,res)=>{
    Answer.findOne({answerid: req.params.id},(err,answer)=>{
        //check if answer exists
    if(!answer) return res.status(404).json({
        data:{},
        message: 'No such book exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:answer,
            message:"Answer fetched!"
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

router.get('/qid/:question',(req,res)=>{
    Answer.findOne({question: req.params.question},(err,answer)=>{
        //check if user exists
    if(!answer) return res.status(404).json({
        data:{},
        message: 'No such question exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:answer,
            message:"Answer fetched!"
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


