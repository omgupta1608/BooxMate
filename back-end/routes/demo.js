const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Demo = require('../schema/demoschema');
const bookschema = require('../schema/bookschema');

router.use(express.json());
dotenv.config();

mongoose.set('debug');



//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Connected to Database!');
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
    User.findById(req.params.id, (err, user));
    //check if user exists
    if(!user) return res.status(404).json({
        data:{},
        message: 'No such demo exist. Please check and try again later'
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


module.exports = router;


