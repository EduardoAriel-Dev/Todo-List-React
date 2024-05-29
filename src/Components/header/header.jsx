import CreateTodos from '../createTodo/createTodos'
import logo from '../../assets/task_fill.png'


const Header = ({addTodo})=>{
    //Poner el H1 con otro tipo de letra
    return(
        <header className="header">
            <img
            src={logo}
            />
            
                
            <h1>TODO LIST:</h1>

            <CreateTodos
                newTodo={addTodo}
            />
        </header>
    );
}

export default Header