const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    name : {required: true , type : String},
    password : {required: true , type : String},
    avatar : {type : String},
    posts : {default: 0 , type : Number},
    posts : {required: true , type : Number},

})

module.exports = model('User', userSchema)