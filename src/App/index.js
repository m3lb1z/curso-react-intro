import React from 'react';
import { TodoProvider } from '../TodoContext';
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

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
