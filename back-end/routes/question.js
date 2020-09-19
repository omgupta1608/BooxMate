const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../schema/questionschema');
const connect = require('../index');
const reviewschema = require('../schema/reviewschema');
const {genId,getDate} = require('../routes/function');

router.use(express.json());


//post api adding a question

router.post('/add-question',(req,res)=>{
    console.log('question');

    const question = new Question({
        questionid: genId(6),
        title: req.body.title,
        description: req.body.description,
        user: req.body.user,
        answercount: req.body.answercount,
        answerdate: req.body.answerdate,
        askdate: getDate(),
        category: req.body.category
    });

    console.log(req.body);

    question.save((err,question)=>{
        if(err) {
            console.log('inside err');
            res.send("Error: "+ err);
        }
        // res.send(user._id);
        res.send(question);
        console.log('saved!');
    });
    

});

//get api for all question
router.get('/',async(req,res)=>{
    const question = await Question.find({}, (err, data) => {
        //console.log(question);
        res.json({
            data: data,
            message: "All questions.."
        });
    });
    
});

//get api for a specific question
router.get('/:id',(req,res)=>{
    Question.findOne({questionid: req.params.id}, (err, question) => {
        if(!question) return res.status(404).json({
            data:{},
            message: 'No such question exist. Please check and try again later'
        });
    
        //if exist and no err
        if(!err){
            res.json({
                data:question,
                message:"Question fetched!"
            });
        }
        else{
            res.status(404).json({
                data:{},
                message: 'Some unexpected error occurred.'
            });
        }
    });
    //check if user exists
    
});

//question->user id

router.get('/uid/:user',(req,res)=>{
    Question.findOne({user: req.params.user},(err,question)=>{
        //check if user exists
    if(!question) return res.status(404).json({
        data:{},
        message: 'No such thing exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:question,
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


