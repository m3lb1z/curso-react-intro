import React from 'react';
import './TodoSearch.css';

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState();

    return (
        <input 
            placeholder="Cortar cebolla" 
            className="TodoSearch" 
            onChange={
                (event) => {
                    console.log ('Escribiste en el TodoSearch');                    
                    console.log(event);
                    console.log(event.target);
                    console.log(event.target.value);
                }
            }
            />
    );
}

export { TodoSearch };