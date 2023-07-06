import './TodoCounter.css';


function TodoCounter({ total, completed }) {
    return (
        <h2 className='TodoCounter'>
            {                
                completed === total ? (total === 0 ? <span>No hay tareas</span> : <span>Has completado todo</span>) : <span>Has completado {completed} de {total} TODOs</span>
            }
        </h2>
    ); 
}

export { TodoCounter };