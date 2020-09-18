const express = require('express');
const app = express();
const router = express.Router();
const Request = require('../schema/requestschema');
const { request } = require('express');
const connect = require('../index');

router.use(express.json());

//post api for adding a request

router.post('/add-request',(req,res)=>{
    console.log('request');

    const request = new Request({
        requestid: req.body.requestid,
        book: req.body.book,
        user: req.body.user,
        requestdate: req.body.requestdate
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

//get api for all request
router.get('/',async(req,res)=>{
    const request = await Request.find();
    console.log(request);
    res.json({
        data: request,
        message: "All requests.."
    });
});

//get api for a specific request
router.get('/:id',(req,res)=>{
    Request.findById(req.params.id, (err, request));
    //check if user exists
    if(!request) return res.status(404).json({
        data:{},
        message: 'No such review exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:request,
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

//request-> book
router.get('/:book',(req,res)=>{
    Request.findOne({book: req.params.book},(err,request)=>{
        //check if user exists
    if(!request) return res.status(404).json({
        data:{},
        message: 'No such thing exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:request,
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


