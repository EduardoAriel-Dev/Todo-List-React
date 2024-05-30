import { useState } from "react";
import './style.css'

const TodoItem = ({id, title, completed, onDeleteTodo,onToggleCompletedTodo,onEditTitle})=>{
    const [newTitle, setNewTitle] = useState(title)
    const [editing,setEditing] = useState(false)

    const handleCheckBox = (event)=>{
        onToggleCompletedTodo({
            id,
            completed: event.target.checked
        })
    }

    const handleDoubleClick = () => {
        console.log('Estoy en el dobleClick')
        setEditing(true)
    }
    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
        //console.log(newTitle)
    }
    const handleTitleBlur = () => {
        setEditing(false)
        //Solo actualizamos el titulo si no esta vacio y si ha cambiado
        if(newTitle.trim() !== '' && newTitle !== title){
            onEditTitle(id, newTitle)
        }
    }
    /*
    const handleSumit = (event) => {
        event.preventDefault();
        if(!setNewTitle.trim()){
            return;
        }
        newTodo(value)
        setValue('')
    }
    */
    
    return(
        <div className="todoItem">
            <input 
              className="toggle" 
              type="checkbox"
              checked={completed}
              onChange={handleCheckBox}/>

              {/*editing ? (
                <form onSubmit={handelSumit}>
                    <input
                    className="new-todoEdit"
                    type="text"
                    value={newTitle}
                    onChange={handleTitleChange}//Este evento se dispara cuando el valor de un elemento de formulario cambia
                    onBlur={handleTitleBlur}//Este evento se dispara cuando un elemento pierde el foco, es decir, cuando el usuario deja de interactuar con él.
                    autoFocus//Este atributo se utiliza para indicar que un elemento debe recibir automáticamente el foco cuando la página se carga
                    />
                </form>
                ):
                (
                <label onDoubleClick={handleDoubleClick}>{title}</label>
                )*/}
                <label>{title}</label>
            
            <button 
              className="detroy"
              onClick={() => {onDeleteTodo(id)}}>
            </button>
        </div>
    );
}

export default TodoItem;