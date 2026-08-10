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


const getProjects = async (req, res) => {

const owner = req.user.id;
try{
    const projects = await Project.find({ owner });
    res.status(200).json({ projects });
}catch(err){
    console.error(err);
    res.status(500).json({ message: err.message });
}

}

const getSingleProject = async (req, res) => {
    const { id } = req.params;
    const owner=req.user.id;

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ project });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}


const updateProject = async(req,res)=>{

  const{id}= req.params;
  const {title,description}= req.body;
  ;
  try{ 

  const project = await Project.findById(id);
  if(!project){

   return  res.status(404).json({message:"Project not found"});




  }
  const isOwner = project.owner.toString() === req.user.id;
  if(!isOwner){

return res.status(403).json({message:"You are not authorized to update this project"})



  }

if(title){

project.title= title;
}
if(description){
project.description= description;
}


await project.save();
return res.status(200).json({message:"Project updated successfully",project});


  }catch(err){
    console.error(err);
    res.status(500).json({message:err.message})
  }





}
const deleteProject = async(req,res)=>{
const {id}= req.params;
try{

const project = await  Project.findById(id);
if(!project){
    return res.status(404).json({message:"Project not found"});
}
  if(project.owner.toString() !== req.user.id){
    return res.status(403).json({message:"You are not authorized to delete this project"});
  }
     await project.deleteOne();
     return res.status(200).json({message:"Project deleted successfully"});

}
catch(err){

       res.status(500).json({message:err.message})





}






}



module.exports = {createProject , getProjects,getSingleProject ,updateProject,deleteProject
};