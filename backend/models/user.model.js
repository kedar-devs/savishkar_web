const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        minlength:2
    },
    lastname:{
     type:String,
     required:false,
     trim:true,
     minlength:1   
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
    
})

const user=mongoose.model('user',userSchema);

module.exports = user