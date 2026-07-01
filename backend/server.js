const express = require('express');
const app = express();
const Port = 5000;
app.get("/",(req,res)=>{

    res.send("Dev journal backed is runing")

});
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});