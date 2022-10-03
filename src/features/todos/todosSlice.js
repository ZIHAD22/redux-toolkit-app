import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    todos: [],
    error: null,
    isLoading: false
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (state) => {
    const { data: todos } = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return todos
})

const todosSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false
                state.todos = action.payload
                state.error = null
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoading = false
                state.todos = []
                state.error = action.payload
            })
    }
})

// export const { getTodos, successTodo, failedTodo } = todosSlice.actions

export default todosSlice.reducer