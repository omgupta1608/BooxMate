const mongoose = require('mongoose');

const reviewschema = mongoose.Schema({
    reviewid: {
        type: String,
        required:true
    },

    review: {
        type: String,
        required: true
    },

    user:{
        type: String
    },

    reviewdate:{
        type: Date
    }

});

module.exports = mongoose.model('Review', reviewschema);