const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongoose.set('debug');

//Connect to DB
const connect = mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Connected to Database!');
});

module.exports = connect;

//routes
const userRoute = require('./routes/user');
const bookRoute = require('./routes/book');
const answerRoute = require('./routes/answer');
const demoRoute = require('./routes/demo');
const questionRoute = require('./routes/question');
const requestRoute = require('./routes/request');
const reviewRoute = require('./routes/review');
const bookRoute2 = require('./routes/books');

app.use('/api/users',userRoute);
app.use('/api/books',bookRoute);
app.use('/api/answer',answerRoute);
app.use('/api/demo',demoRoute);
app.use('/api/question',questionRoute);
app.use('/api/request',requestRoute);
app.use('/api/review',reviewRoute);
app.use('./api/book-2',bookRoute2);


app.listen(4610,()=> console.log('Server is running'));