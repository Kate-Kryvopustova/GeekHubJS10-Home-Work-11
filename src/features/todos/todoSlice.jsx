import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, isDone: false })
    },
    toggleTodo: (state, action) => {
      const todo = state.find(item => item.id === action.payload);
      todo.isDone = !todo.isDone;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos;
export default todoSlice.reducer;