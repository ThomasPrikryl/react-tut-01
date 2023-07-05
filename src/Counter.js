import {useDispatch, useSelector} from 'react-redux';
import './Counter.css';

const Counter = () => {
    const dispatch = useDispatch();

    // Automatically subscribes to store
    // Changes to the store cause a re-render
    // Unmount clears subscription
    const counter = useSelector(state => state.counter);

    const incrementHandler = () => {
        dispatch({type: 'increment'})
    };
    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    };
    const toggleCounterHandler = () => {
    };

    return (
        <main className="counter-container">
            <h1>Redux Counter</h1>
            <div className="counter-container-counter">{counter}</div>
            <div className="counter-container-counter-buttons">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>

        </main>
    );
}

export default Counter;