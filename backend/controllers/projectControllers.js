const Project = require("../modals/Project");

const createProject = async (req, res) => {

const { title, description } = req.body;
const owner = req.user.id;

try{
if(!title){
    return res.status(400).json({error:"Title is required"})

}
const newProject = new Project({title, description, owner});
await newProject.save();
return res.status(201).json({message:"Project created successfully", project:newProject})



}
catch(err){
    console.error(err);
    res.status(500).json({message:err.message})}
}

module.exports = {createProject};