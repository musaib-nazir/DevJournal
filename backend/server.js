
require('dotenv').config();

const express = require('express');
const app = express();
const conDB = require("./config/conDB");

const Port = process.env.PORT;
//databse connection
conDB();
app.use(express.json())


app.get("/",(req,res)=>{

    res.send("Dev journal backed is runing")

});
app.listen(Port,()=>{
    
    console.log(`Server is running SUcessfully`);
});