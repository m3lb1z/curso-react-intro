import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar curso de intro a React.js', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Llorar con la llorona2', completed: false },
//   { text: 'LaLaLaLaLaLa', completed: true }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// Limpiar la memoria de local storage con la key TODOS_V1
// localStorage.removeItem('TODOS_V1');


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos].filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />
  );
}

export default App;
