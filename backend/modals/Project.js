const mongoose = require ("mongoose")


const projectSchema = new mongoose.Schema(

{title : {
    type: String,
    required: true,
trim: true,
minlength: 3,
maxlength: 100,
},

description :{type:String},

owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
}




}
,

{timestamps: true}





)