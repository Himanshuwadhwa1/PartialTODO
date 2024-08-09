import { useState } from 'react'
import './createTodos.css'
export function CreateTodo(){
    // react-query
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return (
    <div>
        <input className='create-todo' type="text" name="" placeholder="title" id="" onChange={(e)=>{
            setTitle(e.target.value);
        }} /><br />    
        <input  className='create-todo' type="text" name="" placeholder="description" id="" onChange={(e)=>{
            setDescription(e.target.value);
        }}  /><br />    
        <button style={{
            border:10,
            color:"white",
            backgroundColor:"red"
        }}  className='create-todo' onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method : "POST",
                body : JSON.stringify({
                    title:title,
                    description:description

                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
                .then( async(reslove)=>{
                    const data = await reslove.json();
                    alert(data);
                })
        }}>Add a TODO</button>
    </div>
    )
}