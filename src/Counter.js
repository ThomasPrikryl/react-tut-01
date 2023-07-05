import {connect, useDispatch, useSelector} from 'react-redux';
import './Counter.css';

const Counter = (props) => {
    // Automatically subscribes to store
    // Changes to the store cause a re-render
    // Unmount clears subscription
    const counter = useSelector(state => state.counter);

    const incrementHandler = () => {
        props.increment();
    };
    const decrementHandler = () => {
        props.decrement();
    };
    const toggleCounterHandler = () => {
        props.toggle();
    };

    return (
        <main className="counter-container">
            <h1>Redux Counter</h1>
            {props.showCounter && <div className="counter-container-counter">{counter}</div>}
            <div className="counter-container-counter-buttons">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>

        </main>
    );
}

const mapStateToProps = (state) => {
    // These land as props in the Counter Component
    return {
        counter: state.counter,
        showCounter: state.showCounter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'}),
        toggle: () => dispatch({type: 'toggle'})
    };
}

// Connect manages a store subscription. This is the alternative to the useDispatch and useSelector Hooks.
// Usually used for class based components
export default connect(mapStateToProps, mapDispatchToProps)(Counter);