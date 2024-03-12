import { useState, useEffect } from 'react';
import Button from '../components/Button';

function useCounter(intialCount) {
    // Custom hooks can call other hooks
    const [count, setCount] = useState(intialCount);

    useEffect(() =>{
        console.log(count);
    }, [count]);

    const icrement = () => {
        setCount(count + 1);
    };

    return {
        count,
        icrement,
    };
}

function CounterPage({ intialCount }) {
    const { count, icrement} = useCounter(intialCount);
    // handlePress is a function that will be called when the button is released
    // JSX expressions must have one parent element
    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={icrement}>
            Increment
        </Button>
    </div>

}

export default CounterPage;