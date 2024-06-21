import { createSlice, nanoid } from "@reduxjs/toolkit"

const storedList = JSON.parse(localStorage.getItem('list'));
const initialState = storedList ? { todos: storedList } : { todos: [] };

export const addRemove = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        text: action.payload.text,
      }
      state.todos.push(todo);
      localStorage.setItem('list', JSON.stringify([state.todos]));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_, i) => i !== action.payload.index);
      localStorage.setItem('list', JSON.stringify([state.todos]));
    }
  }
})

export const { addTodo, removeTodo } = addRemove.actions;

export default addRemove.reducer;
