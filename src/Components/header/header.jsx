import CreateTodos from '../createTodo/createTodos'
import logo from '../../assets/task_fill.png'
import './style.css'


const Header = ({addTodo})=>{
    //Poner el H1 con otro tipo de letra
    return(
        <header className="header">
            <div className='headerTitle'>
                <h1>TODO LIST:</h1>
                <img className='logoImg'
                src={logo}/>    
            </div>
            <CreateTodos
                newTodo={addTodo}
            />
        </header>
    );
}

export default Header