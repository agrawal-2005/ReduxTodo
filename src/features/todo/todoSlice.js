import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if(todo){
                if(text !== undefined) todo.text = text;
            }
        }
    }
})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;