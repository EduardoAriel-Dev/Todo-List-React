import Filters from "../filters"
import './style.css'

const FooterTodo = (
    { 
     activeCount,
     completedCount,
     filterSelected,
     onClearCompleted,
     handleFilterChange
    }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Todos Activos
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            
            {completedCount > 0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                >
                    Borrar completados
                </button>
            )}
        </footer>
    )
}

export  default FooterTodo