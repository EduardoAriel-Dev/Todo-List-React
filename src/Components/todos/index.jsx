import TodoItem from "../todoItem";
import './style.css'

const Todos = ({todos,onDeleteTodo,onToggleCompleted})=>{
    return(
        <ul className="todo-list">
            {todos.map(todo => (
            <li 
                key={todo.id} 
                className={`${todo.completed ? 'completed' : 'notCompleted'}`}>
                <TodoItem 
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onDeleteTodo={onDeleteTodo}
                    onToggleCompletedTodo={onToggleCompleted}
                />
            </li>))}
        </ul>
    );
}

export default Todos;