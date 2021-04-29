import React, { useState, } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../../store/todoSlice";
import { Button } from 'react-bootstrap';
import { IOnChangeInput, IHandleSubmit } from '../../interfaces/interfaces';

function AddTodo(): JSX.Element {
  const [item, setItem] = useState<string>('');

  const dispatch = useDispatch();

  const handleSubmit: IHandleSubmit = (event) => {
    event.preventDefault();
    if (!item) return;
    dispatch(addTodo(item));
    setItem('');
  }

  const handleChange: IOnChangeInput = (event) => {
    setItem(event.target.value);
  }

  return (
    <form
      onSubmit={ handleSubmit }
      className='form-inline'
    >
      <input
        className='form-control'
        type='text'
        placeholder='add a new task...'
        value={ item }
        onChange={ handleChange }
      />
      <Button type='submit' variant='outline-secondary'>Add task</Button>
    </form>
  )
}

export default AddTodo;
