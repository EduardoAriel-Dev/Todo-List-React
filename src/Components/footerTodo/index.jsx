import Filters from "../filters"

const FooterTodo = (
    { 
     activeCount,
     completedCount,
     filterSelected,
     onClearCompleted,
     handleFilterChange
    })=> {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Todos Activos
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />

            {completedCount>0 && (
                <button
                    className="btnComplete"
                    onClick={onClearCompleted}
                >
                    Borrar completados
                </button>
            )}
        </footer>
    )
}

export  default FooterTodo