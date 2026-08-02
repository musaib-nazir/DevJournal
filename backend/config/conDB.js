const mongoose = require("mongoose");
require('dotenv').config();
const conDB = async ()=>{

try{

 await mongoose.connect(process.env.MONGO_URI)
 console.log("Mongoose Conected")


}catch(error){
    console.error("Mongoose conneetcion Failed")
    console.error(error.message)


   process.exit(1)

}


}
module.exports = conDB;