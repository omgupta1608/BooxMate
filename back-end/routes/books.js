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

const app = express();
const router = express.Router();

//schema
const Book = require('../schema/bookschema');
const {Bookmark, Cart} = require('../schema/bookschema');


//Middleware

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine','ejs');

//dotenv
const mongoURI = process.env.DB_CONNECT;
dotenv.config();

//connection to DB
const connect = mongoose.createConnection(mongoURI,{useUnifiedTopology: true, useNewUrlParser: true });

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


app.get('/',(req,res)=>{
    gfs.files.find().toArray((err, files)=>{
        //if files r there
        if(!files || files.length ===0){
            res.render('app',{files: false});   
        }else{
            files.map(file=>{
                if(file.contentType ==='image/jpeg'||file.contentType ==='image/png'){
                    file.isImage = true;
                } else{
                    file.isImage = false;
                }
            });
            console.log('files:'+JSON.stringify(files));
            res.render('app',{files:files});
        }
    });
});


//upload to DB
app.post('/upload',upload.single('file'),(req,res)=>{       //multer can upload even an array of files but its not needed rn. 'file is the filename written in the form in html in class custom-file mb-3'
    res.json({file: req.file});
    console.log(JSON.stringify({file: req.file}));
    console.log('uploaded!');
    // res.redirect('/');
});

//display all files

app.get('/files',(req,res)=>{
    gfs.files.find().toArray((err, files)=>{
        //if files r there
        if(!files || files.length ===0){
            return res.status(404).json({
                err: 'No files exist'
            });
        }
        console.log('files:'+JSON.stringify(files));
         //File exist
         return res.json(file); 
    });
});

//display specific file

app.get('/image/:filename',(req,res)=>{
    gfs.files.findOne({filename: req.params.filename},(err, file)=>{
        //if files r there
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No file exist'
            });
        }

        // check if image
        if(file.contentType = 'image/jpeg'|| file.contentType == 'image/png'){
            //create read stream to the browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else{
            res.status(404).json({
                err:"Not an image"
            });
        }
    });
       
});


// //delete

// app.delete('/files/:id',(req,res)=>{
//     gfs.remove({_id: req.params.id, root:'uploads'},(err, gridStore)=>{
//         if(err) return res.status(404).json({err : err});
//         res.redirect('/');
//     });
// });

//adding a book
router.post('/addbook',(req,res)=>{
    var imagename = null;
    fetch('http://localhost:4600/upload',{method: 'POST',body: req.body.image})
    .then((res)=>{
        console.log(res);
        imagename = res.filename;

        

    const book = new Book({
        bookid: req.body.bookid,
        bookimage: imagename,
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
        postdate: req.body.date
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

router.get('/:user',(req,res)=>{
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

router.get('/',async(req,res)=>{
    const bookmark = await Bookmark.find();
    console.log(bookmark);
    res.json({
        data: bookmark,
        message: "All bookmarks.."
    });
});



//bookmark acc to id
 router.get('/:userid', (req, res) => {
     Bookmark.find({user: req.params.userid}).exec((err, data) => {
         if(!err){
            res.json({
                data:data,
                message:"Fetched!"
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

router.get('/',async(req,res)=>{
    const cart = await Cart.find();
    console.log(cart);
    res.json({
        data: cart,
        message: "All element in cart.."
    });
});

 //cart acc to user id
 router.get('/cart/:userid', (req, res) => {
    Bookmark.find({user: req.params.userid}).exec((err, data) => {
        if(!err){
           res.json({
               data:data,
               message:"Fetched!"
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

