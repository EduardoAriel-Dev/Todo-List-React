import './style.css'

const Filters = ({filterSelected,onFilterChange}) =>{
    return(
        <ul className="filters">
            <li>
                <a className={`${filterSelected === 'all' ? 'selected' : ''}`}
                   onClick={()=>{onFilterChange('all')}}>
                   TODOS
                </a>
            </li>

            <li>
                <a className={`${filterSelected === 'active' ? 'selected' : ''}`}
                   onClick={()=>{onFilterChange('active')}}>
                   Pendientes
                </a>
            </li>

            <li>
                <a className={`${filterSelected === 'completed' ? 'selected' : ''}`}
                   onClick={()=>{onFilterChange('completed')}}>
                   Completados
                </a>
            </li>
        </ul>
    );
}

export default Filters