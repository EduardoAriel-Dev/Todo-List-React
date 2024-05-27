import { useState } from "react"
import Todos from "./Components/todos"
import './App.css'

//TODOS  de mentira para las pruebas
const mockTodo = [
  {
    id: '1',
    title: 'tarea 1',
    completed: false
  },
  {
    id: '2',
    title: 'tarea 2',
    completed: false
  },
  {
    id: '3',
    title: 'tarea 3',
    completed: true
  }
]

function App() {
  const [todos,setTodos] = useState(mockTodo)

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter( todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({id ,completed}) => {
    const newTodo = todos.map((todo)=>{
      if(todo.id === id){
        return {
          ...todo,
          completed
        }
      }
      else{
        return todo
      }
    })
    setTodos(newTodo)
  }


  return (
    <div className="toodApp">
      <h1>TODO LIST:</h1>
      <Todos 
      onDeleteTodo={handleDeleteTodo}
      onToggleCompleted={handleCompleted}
      todos={todos}/>
    </div>
  )
}

export default App
