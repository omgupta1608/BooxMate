const mongoose = require('mongoose');

const bookschema = mongoose.Schema({
    bookid: {
        type: String
        // required:true
    },

    bookname: {
        type: String
        // required: true
    },

    bookdescription:{
        type: String
        // required: true
    },

    bookimage:{
        type: String,
        deeault:""
       // required: true
    },

    category:{
        type: String
        // required: true
    },

    price:{
        type: Number
        // required: true
    },
    
    mode:{
        type: String
        // required: true
    },

    duration:{
        type: String
    },

    author:{
        type: String
        // required: true
    },

    publisher:{
        type: String
        // required: true
    },

    edition:{
        type: String
    },

    user:{
        type: String   //string url 
        //required: true
    },

    requestcount:{
        type: Number,
        default:0
    },

    isclosed:{          //request
        type: Boolean,
        default: false
    },

    issold:{
        type: Boolean,
        default: false
    },

    postdate:{
        type: String
        // required: true,
        // default: 
    },

    location:{
        type: String
        // required: true
    }

});

var bookmarks = mongoose.Schema({
    bookmarks: {
        type: [bookschema]
    }
});

var cart = mongoose.Schema({
    cart:{
        type: [bookschema]
    }
});

module.exports = mongoose.model('Book', bookschema);
module.exports.bookmarks = mongoose.model('Bookmarks', bookmarks);
module.exports.cart = mongoose.model('Cart', cart);