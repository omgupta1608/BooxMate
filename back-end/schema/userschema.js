//Schema

const userschema = mongoose.Schema({
    userid: {
        type: String,
        required:true,
    },

    uname: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },

    upassword:{
        type: String,
        required: true,
        min: 6
    },

    contact:{
        type: String,
        required: true,
        min: 8
    },

    uemail:{
        type: String,
        required: true,
        min: 6
    },

    profilepic:{
        type: String,
        required: true
    }   
});

const users = mongoose.model('User',userschema);