import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);
  fetch("http://localhost:3000/todos")  // useEffect hooks will be better option
    .then(async (response)=>{
      const json = await response.json();
      setTodos(json); // this will change todos and create a infinite loop of rendering and hitting backend
    })


  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} /> 
    </div>
  )
}

export default App
