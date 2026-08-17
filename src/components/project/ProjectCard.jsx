function ProjectCard({ id,title, description , onDelete}) {
const Handleclick=()=>{

console.log("button clicked ")



}

  return (
    <div>
      <h1> {title}</h1>

      <p>{description}</p>

<button onClick={Handleclick}>CLick me


</button>
<button onClick={()=>onDelete(id)}>delete</button>
          
    </div>
  );
}

export default ProjectCard