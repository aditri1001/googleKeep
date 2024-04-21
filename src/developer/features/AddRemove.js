import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
}

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
      state.todos = [...state.todos, todo]
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_,i) => i !== action.payload.index)
    }
  }
})

export const { addTodo, removeTodo } = addRemove.actions;

export default addRemove.reducer;
