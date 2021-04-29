import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { IItem, ITodoArray, IState } from '../interfaces/interfaces';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state: ITodoArray, action) => {
      state.push({ id: uuidv4(), text: action.payload, isDone: false })
    },
    toggleTodo: (state: ITodoArray, action) => {
      state.find(item => {
        if(item.id === action.payload) {
          return item.isDone = !item.isDone
      }});
    },
    deleteTodo: (state, action) => {
      return state.filter((todo: IItem) => todo.id !== action.payload)
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state: IState): ITodoArray => state.todos;
export default todoSlice.reducer;
