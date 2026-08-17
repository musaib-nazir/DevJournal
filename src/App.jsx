import { useState } from 'react'
import ProjectCard from './components/project/ProjectCard'


function App() {

const [count , setCount]= useState(0)
const [isOpen,setIsopen] = useState(false)
const [title , setTitle] = useState("")
const [description,setDescription] = useState("")

const project = [



{
 _id:"1234", title:"DevJournal", description:"new description"
},
{
  _id:"12345", title:"Project2", description:"description 123"
},
{
  _id:"123456", title:"project3", description:"description2"
}







]
const DeleteHandler =(id)=>{
console.log("delete project",id)



}

  return (
    <div>


   <h1>Counter={count} </h1>


  <button onClick={()=>{setCount(count+1)}}>Increase</button>
  <button onClick={()=>{setCount(count-1)}}> decrease</button>


<button onClick={()=>{setIsopen(!isOpen)}}> click </button>

{isOpen?  <p>hellooo</p>:<p> </p>}


<input
value={
title
}
onChange={(e)=>{setTitle(e.target.value)}} />


<input

value={description}
 onChange={(e)=>{setDescription(e.target.value)}}/>






    {project.map( project=>(<ProjectCard
    key={project._id}
    id={project._id}
    title= {project.title}
  description={project.description}
  onDelete ={DeleteHandler}
    
    />
    ))}
                


    </div>
  )
}

export default App
