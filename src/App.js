import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de intro a React.js', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LaLaLaLaLaLa', completed: true }
];

function App() {
  return (

    <>

        <TodoCounter completed={8} total={12} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>

        <CreateTodoButton />

    </>
  );
}

export default App;
