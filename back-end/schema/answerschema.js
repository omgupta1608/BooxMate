const mongoose = require('mongoose');

const answerschema = mongoose.Schema({
    answerid: {
        type: String
    },

    question: {
        type: String
    },

    answer:{
        type: String
    },

    user:{
        type: String
    },

    answerdate:{
        type: String
        // required: true
    },

    hearts:{
        type: Number,
        default: 0
    }   
});

module.exports = mongoose.model('Answer', answerschema);