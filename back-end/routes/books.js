const express = require('express');
const path = require('path');
const crypto = require('crypto');   //for generating the file names
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const connect = require('../index');
const {genId,getDate} = require('../routes/function');


const app = express();
const router = express.Router();

//schema
const Book = require('../schema/bookschema');
const {bookmarks, cart} = require('../schema/bookschema');


//Middleware

router.use(bodyParser.json());

//adding a book
router.post('/add-book',(req,res)=>{
    
    const book = new Book({
        bookid: genId(6),
        //bookimage: imagename,
        bookname: req.body.bookname,
        location: req.body.location,
        bookdescripition: req.body.bookdescripition,
        price: req.body.price,
        author: req.body.author,
        category: req.body.category,
        mode: req.body.mode,
        publisher: req.body.publisher,
        edition: req.body.edition, 
        user: req.body.user,
        requestcount: req.body.requestcount,
        postdate: getDate()
    });

    console.log(req.body);

    console.log('sam');

    book.save((err,books)=>{
        if(err) {
            console.log('inside err');
            res.send("Error: "+ err);
        }
        res.send(books);
        console.log('saved!');
    });

});

//get api for all the books
router.get('/',async(req,res)=>{
    const book = await Book.find();
    console.log(book);
    res.json({
        data: book,
        message: "All books.."
    });
});

//get api for a specific user
router.get('/:id',(req,res)=>{
    Book.findOne({bookid: req.params.id},(err,book)=>{
        //check if user exists
    if(!book) return res.status(404).json({
        data:{},
        message: 'No such book exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:book,
            message:"Book fetched!"
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


//books->userid

router.get('/uid/:user',(req,res)=>{
    Book.findOne({question: req.params.user},(err,book)=>{
        //check if user exists
    if(!book) return res.status(404).json({
        data:{},
        message: 'No such thing exist. Please check and try again later'
    });

    //if exist and no err
    if(!err){
        res.json({
            data:book,
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


//all bookmarks

router.get('/bookmark',async(req,res)=>{
    const Bookmark = await bookmarks.find().exec((err, data) => {;
        if(!err){
            console.log(Bookmark);
            res.json({
                data: {},
                message: "API under construction"
            });
        }
        else{
            res.json({
                data: {},
                message: "Unfortunatley some error occured"
            });
        }
      
    });
});



//bookmark acc to id
 router.get('/bookmark/:userid', (req, res) => {
     bookmarks.find({user: req.params.userid}).exec((err, data) => {
         if(!err){
            res.json({
                data: {},
                message: "API under construction"
            });
         }
         else{
            res.status(404).json({
                data:{},
                message: 'Some unexpected error occurred.'
            });
        }
     })
 });

//all cart

router.get('/cart',async(req,res)=>{
    const Cart = await cart.find().exec((err, data) => {;
        if(!err){
            console.log(Bookmark);
            res.json({
                data: {},
                message: "API under construction"
            });
        }
        else{
            res.json({
                data: {},
                message: "Unfortunatley some error occured"
            });
        }
    });
});

 //cart acc to user id
 router.get('/cart/:userid', (req, res) => {
    Bookmark.find({user: req.params.userid}).exec((err, data) => {
        if(!err){
           res.json({
            data: {},
            message: "API under construction"
           });
        }
        else{
           res.status(404).json({
               data:{},
               message: 'Some unexpected error occurred.'
           });
       }
    })
});

module.exports = router;

