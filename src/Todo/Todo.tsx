import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { selectTodos, toggleTodo, deleteTodo } from '../store/todoSlice';

function Todo(): JSX.Element {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const onToggle = (id: string) => dispatch(toggleTodo(id));
  const onDelete = (id: string) => dispatch(deleteTodo(id));

  return (
      <div id='main'>
        <h1 className='title'>Todo list</h1>
        <AddTodo />
        <TodoList
            todos={ todos }
            toggleTodo={ onToggle }
            deleteTodo={ onDelete }
        />
      </div>
  );
}

export default Todo;
