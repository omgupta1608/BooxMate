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
        type: String
    },

    user:{
        type: String
    },

    answerscount:{
        type: Number,
        default:0
    },

    isclosed:{
        type: Boolean,
        default:false
    },

    category:{
        type: String
    }
});

module.exports = mongoose.model('Question', questionschema);