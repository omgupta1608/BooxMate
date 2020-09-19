const mongoose = require('mongoose');

const demoschema = mongoose.Schema({
    demoid: {
        type: String
    },

    title: {
        type: String
    },

    description:{
        type: String
    },

    file:{
        type: String,
        default: ""
    },

    user:{
        type: String
    },

    starcount:{
        type: Number,
        default: 0
    },

    ratedcount:{
        default: 0,
        type: Number
    },

    reviewscount:{
        default: 0,
        type: Number
    },
    
    demodate:{
        type: String
    }   
});

module.exports = mongoose.model('Demo', demoschema);