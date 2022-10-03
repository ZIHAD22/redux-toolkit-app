import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../features/counter/counterSlice';
import Todos from './Todos';

const Counter = () => {
    const {count , error} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleReset = () => {
        dispatch(reset())
    }
    return (
        <div>
            <h1>Count: {count}  {error &&`: ${error}` }</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleReset}>RESET</button>
            <div>
                <Todos/>
            </div>
        </div>
    );
};

export default Counter;