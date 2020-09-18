const mongoose = require('mongoose');

const questionschema = mongoose.Schema({
    questionid: {
        type: String
    },

    title: {
        type: String
    },

    description:{
        type: String
    },

    askdate:{
        type: Date
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
        type: String
    }
});

module.exports = mongoose.model('Question', questionschema);