import { useState } from "react"
import Todos from "./Components/todos"
import FooterTodo from "./Components/footerTodo"
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
  const [filterSelected, setFilterSelected] = useState('all')

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

  const handleFilterChange = (filter)=>{
    console.log(filter)
  }

  const handleClearComplete = () => {
    const newTodos = todos.filter((todo)=>!todo.completed)
    setTodos(newTodos)
  }
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completeCount = todos.length - activeCount

  return (
    <div className="toodApp">
      <h1>TODO LIST:</h1>
      <Todos 
      onDeleteTodo={handleDeleteTodo}
      onToggleCompleted={handleCompleted}
      todos={todos}/>
      <FooterTodo 
      activeCount={activeCount}
      completeCount={completeCount}
      filterSelected={filterSelected}
      onClearCompleted={handleClearComplete}
      handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
