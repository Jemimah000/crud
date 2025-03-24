const mongoose = require("mongoose");
const friendSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    quote : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
},
{timestamps:true});

module.exports = mongoose.model("Friend",friendSchema);