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
        type: String
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