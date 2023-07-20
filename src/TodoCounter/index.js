import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
    const {
        completedTodos : completed,
        totalTodos: total,
    } = React.useContext(TodoContext);

    return (
        <h2 className='TodoCounter'>
            {                
                completed === total ? (total === 0 ? "No hay tareas" : <span>Has completado todo</span>) : <>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</>
            }
        </h2>
    ); 
}

export { TodoCounter };