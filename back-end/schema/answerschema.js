const mongoose = require('mongoose');

const answerschema = mongoose.Schema({
    answerid: {
        type: String,
        required:true,
    },

    question: {
        type: String
    },

    answer:{
        type: String,
        required: true
    },

    user:{
        type: String
    },

    answerdate:{
        type: Date,
        required: true
    },

    hearts:{
        type: Number
    }   
});

module.exports = mongoose.model('Answer', answerschema);