const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../schema/bookschema');
const fetch = require('node-fetch');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const crypto = require('crypto');

app.set('view engine','ejs');


const dotenv = require('dotenv');
// router.use(express.json({limit: '50mb'}));
// router.use(express.urlencoded({limit: '50mb'}));
dotenv.config();

mongoose.set('debug');


// router.use(bodyParser.json());

router.use(methodOverride('_method'));

const mongoURI = process.env.DB_CONNECT 
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

router.get('/',(req,res)=>{
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

router.use(bodyParser.json({ limit: "50mb" }))
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

//upload to DB
router.post('/upload',upload.single('file'),(req,res)=>{       //multer can upload even an array of files but its not needed rn. 'file is the filename written in the form in html in class custom-file mb-3'
    // //res.json({file: req.file});
    // console.log(JSON.stringify({file: req.file}));
    // res.end();
    // //res.json({file: req.file});
    
    res.send("Hello");
});




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


module.exports = router;

