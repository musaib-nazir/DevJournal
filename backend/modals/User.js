// User Model
// Stores authentication and account information for each DevJournal user.


const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    

name:{type:String,required:true},
email:{type:String,required:true,unique:true,trim:true,lowercase:true},
password:{type:String,required:true},








},{timestamps:true})
const User = mongoose.model("User",userSchema);


module.exports=User;