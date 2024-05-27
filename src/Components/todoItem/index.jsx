
const TodoItem = ({id, title, completed, onDeleteTodo,onToggleCompletedTodo})=>{
    
    const handleCheckBox = (event)=>{
        onToggleCompletedTodo({
            id,
            completed: event.target.checked
        })
    }
    
    return(
        <div className="todoItem">
            <input 
              className="toggle" 
              type="checkbox"
              checked={completed}
              onChange={handleCheckBox}/>
            <label>{title}</label>
            <button 
              className="deleteTodo"
              onClick={() => {onDeleteTodo(id)}}>
            </button>
        </div>
    );
}

export default TodoItem;