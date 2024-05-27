import Filters from "../filters"

const FooterTodo = (
    { 
     activeCount = 0,
     completedCount = 0,
     onClearCompleted,
     filterSelected
    })=> {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount.length}</strong> Todos Completeds
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={()=>{}}
            />
        </footer>
    )
}

export  default FooterTodo