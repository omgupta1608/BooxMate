const mongoose = require('mongoose');

const questionschema = mongoose.Schema({
    questionid: {
        type: String,
        required:true,
    },

    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    askdate:{
        type: Date,
        required: true
    },

    user:{
        type: String
    },

    answerscount:{
        type: Number
    },

    isclosed:{
        type: Boolean
    },

    category:{
        type: String,
        required: true
    } 
});

module.exports = mongoose.model('Question', questionschema);