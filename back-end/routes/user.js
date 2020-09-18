const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

const dotenv = require('dotenv');

router.use(express.json());
dotenv.config;

mongoose.set('debug');


//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Connected to Database!');
});

//get api for a specific user
router.get('users/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(result =>{
        if(!result){return res.status(404).end();}
        return res.status(200).json(result);
    })
    .catch(err=> next (err));
});


