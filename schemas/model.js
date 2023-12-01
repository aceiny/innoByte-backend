const {Schema , model} = require('mongoose');

const userSchema = new Schema({
    name : {
        type : String,
        trim : true,
    },
    email : {
        type : String,
        unique : true,
    },
    team : {
        type : String,
    },
    phoneNumber : {
        type : String,
    },
    institution : {
        type : String,
        //enum : ['ESI','ESTIN','USTHB','ESI SBA','Other'],
    },
    placeToStay : {
        type : Boolean
    },
    anythingToAdd : {
        type : String,
    },
})

module.exports = model('User',userSchema);