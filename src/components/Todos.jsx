import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../features/todos/todosSlice';

const Todos = () => {
    const {isLoading , error , todos} = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    } , [])
    if(isLoading){
        return <h2>Loading todos ... </h2>
    }

    if(error){
        return <h2>{error}</h2>
    }
    return (
        <div>
            <h2>All My Todos</h2>
            <div>
                {todos && todos.map(todo => {
                   return <h5>{todo.title}</h5>
                })}
            </div>
        </div>
    );
};

export default Todos;