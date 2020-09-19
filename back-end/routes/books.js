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
const {genId,getDate} = require('../routes/function');


const app = express();
const router = express.Router();
const mongoURI = process.env.DB_CONNECT;

dotenv.config();
mongoose.set('debug');

//schema
const Book = require('../schema/bookschema');
const {bookmarks, cart} = require('../schema/bookschema');


//Middleware

router.use(bodyParser.json());
router.use(methodOverride('_method'));


//Connect to DB
const connect = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Connected to Database!');
});


//Init G-FS
let gfs;
connect.once('open',()=>{
    //Init stream
    gfs = Grid(connect.db, mongoose.mongo);
    gfs.collection('uploads');
});


//storage engine

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

router.use(bodyParser.json({ limit: "50mb" }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

//upload to DB
router.post('/upload',upload.single('bookimage'),(req,res)=>{       //multer can upload even an array of files but its not needed rn. 'file is the filename written in the form in html in class custom-file mb-3'
    res.json({file: req.file});  
    // res.send("Hello");
});


//adding a book
router.post('/add-book',(req,res)=>{
    
    // var imagename = null;
    // fetch('http://localhost:4650/upload',{method: 'POST',body: req.body.image})
    // .then((res)=>{
    //     console.log(res);
    //     imagename = res.filename;
    //     .then(res => {
    //         if (res.resultCode == "200") return res.json();
    //         return Promise.reject(`Bad call: ${res.resultCode}`);

    const book = new Book({
        bookid: genId(6),
      //  bookimage: imagename,
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
        duration: req.body.duration,
        postdate: getDate()
    });

    console.log(req.body);

    console.log('sam');

    book.save((err,book)=>{
        if(err) {
            console.log('inside err');
            res.send("Error: "+ err);
        }
        else{
            res.json({
                data: book,
                message: "Saved"
            });
        }
    });
});


//get api for all the books
router.get('/',async(req,res)=>{
    const book = await Book.find()({}, (err, book) => {
        if(!err){
            res.json({
                data: book,
                message: "All books.."
            });
        }
        else{
            res.status(400).json({
                data: {},
                message: "Some error occured.."
            }); 
        }
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

