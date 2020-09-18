//Schema

const bookschema = mongoose.Schema({
    bookid: {
        type: String,
        required:true,
    },

    bookname: {
        type: String,
        required: true,
    },

    bookdescription:{
        type: String,
        required: true
    },

    bookimage:{
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },
    
    booktype:{
        type: String,
        required: true
    },

    duration:{
        type: String
    },

    author:{
        type: String,
        required: true
    },

    publisher:{
        type: String,
        required: true
    },

    edition:{
        type: String
    },

    userid:{
        type: String,
        required: true
    },

    requestcount:{
        type: Number
    },

    isclosed:{          //request
        type: boolean,
        required: true
    },

    issold:{
        type: boolean,
        required: true
    } 






});

const users = mongoose.model('User',userschema);