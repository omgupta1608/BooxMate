const express = require('express');
const app = express();
// const userRoute = require('./auth');
// const bookRoute = require('./book');

app.use('/api/users/',userRoute);
app.listen(3200,()=> console.log('Server is running'));