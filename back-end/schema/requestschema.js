const mongoose = require('mongoose');

const requestschema = mongoose.Schema({
    requestid: {
        type: String
    },

    book: {
        type: String
    },

    user:{
        type: String
    },

    requestdate:{
        type: Date
    }

});

module.exports = mongoose.model('Request', requestschema);