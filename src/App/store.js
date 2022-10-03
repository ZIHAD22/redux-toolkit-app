import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../features/counter/counterSlice";
import todosReducers from "../features/todos/todosSlice";

const store = configureStore({
    reducer: {
        counter: counterReducers,
        todos: todosReducers
    }
})

store.subscribe(() => {
    console.log(store.getState());
})

export default store