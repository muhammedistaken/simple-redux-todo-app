import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                id: 1,
                text: 'Test Todo Item',
                completed: false
            },
            {
                id: 2,
                text: 'Another Todo Item',
                completed: true
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: state.todos.length+1,
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;