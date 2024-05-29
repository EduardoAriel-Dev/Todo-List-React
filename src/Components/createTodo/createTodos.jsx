import { useState } from "react";
import './style.css'

const createTodos = ({newTodo}) => {
    const [value, setValue] = useState('')
    
    const handleChangeValue = (event) => {
        const value = event.target.value
        //console.log(value)
        setValue(value)
    }

    const handleSumit = (event) => {
        event.preventDefault();
        if(!value.trim()){
            return;
        }
        newTodo(value)
        setValue('')
    }

    return(
        <form onSubmit={handleSumit}>
            <input type="text" 
            placeholder="crea tu nuevo TODO....." 
            value={value}
            onChange={handleChangeValue}
            autoFocus
            />
        </form> 
    );
}

export default createTodos;