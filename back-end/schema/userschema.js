const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    userid: {
        type: String
    },

    uname: {
        type: String
    },

    upassword:{
        type: String
    },

    contact:{
        type: String
    },

    uemail:{
        type: String
    },

    profilepic:{
        type: String
    }   
});

module.exports = mongoose.model('User', userschema);