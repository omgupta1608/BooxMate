const express = require('express');
const app = express();

//routes
const userRoute = require('./routes/user');
const bookRoute = require('./routes/book');

app.use('/api/users',userRoute);
app.use('/api/books',bookRoute);


app.listen(4600,()=> console.log('Server is running'));