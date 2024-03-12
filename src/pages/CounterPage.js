import { useState } from 'react';
import Button from '../components/Button';
// import useCounter from '../hooks/use-counter';

function CounterPage({ intialCount }) {
    // const { count, icrement} = useCounter(intialCount);
    const [count, setCount] = useState(intialCount);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // handlePress is a function that will be called when the button is released
    // JSX expressions must have one parent element
    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
    </div>

}

export default CounterPage;