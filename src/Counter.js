import {connect, useDispatch, useSelector} from 'react-redux';
import './Counter.css';

const Counter = (props) => {
    const incrementHandler = () => {
        props.increment();
    };
    const decrementHandler = () => {
        props.decrement();
    };
    const toggleCounterHandler = () => {
    };

    return (
        <main className="counter-container">
            <h1>Redux Counter</h1>
            <div className="counter-container-counter">{props.counter}</div>
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
        counter: state.counter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'})
    };
}

// Connect manages a store subscription. This is the alternative to the useDispatch and useSelector Hooks.
// Usually used for class based components
export default connect(mapStateToProps, mapDispatchToProps)(Counter);