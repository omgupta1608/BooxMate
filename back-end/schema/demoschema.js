const mongoose = require('mongoose');

const demoschema = mongoose.Schema({
    demoid: {
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

    file:{
        type: String,
        required: true
    },

    user:{
        type: String
    },

    starcount:{
        type: Number
    },

    ratedcount:{
        type: Number
    },

    reviewscount:{
        type: Number
    },
    
    demodate:{
        type: Date
    }   
});

module.exports = mongoose.model('Demo', demoschema);