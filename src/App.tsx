import React from 'react';
import './App.css';
import AddTodo from './features/todos/AddTodo';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, toggleTodo, deleteTodo } from './features/todos/todoSlice';
import TodoList from './features/todos/TodoList';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const onToggle = (id: string) => dispatch(toggleTodo(id));
  const onDelete = (id: string) => dispatch(deleteTodo(id));
  
  return (
    <div id='main'>
      <h1 className='title'>Todo list</h1>
      <AddTodo />
      <TodoList
        todos={todos}
        toggleTodo={onToggle}
        deleteTodo={onDelete}
      />
    </div>
  );
}

export default App;
