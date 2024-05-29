import { useState } from "react"
import Todos from "./Components/todos"
import FooterTodo from "./Components/footerTodo"
import Header from "./Components/header/header"
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
    setFilterSelected(filter)
    console.log(filter)
  }

  const handleFilterTODO = todos.filter(todo => {
    if(filterSelected === 'active') return !todo.completed
    if(filterSelected === 'completed') return todo.completed
    return todo
  })


  const handleClearComplete = () => {
    const newTodos = todos.filter((todo)=>!todo.completed)
    setTodos(newTodos)
  }
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completeCount = todos.length - activeCount

  const handelAddTODO = (title)=>{
    const newTODO = {
      id: crypto.randomUUID(),//Crea un ID Random
      title,
      completed: false
    }
    const newTODOS = [...todos,newTODO]
    setTodos(newTODOS)
  }

  

  return (
    <div className="toodApp">
      <Header addTodo={handelAddTODO}/>
      <Todos 
      onDeleteTodo={handleDeleteTodo}
      onToggleCompleted={handleCompleted}
      todos={handleFilterTODO}/>
      <FooterTodo 
      activeCount={activeCount}
      completedCount={completeCount}
      filterSelected={filterSelected}
      onClearCompleted={handleClearComplete}
      handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
