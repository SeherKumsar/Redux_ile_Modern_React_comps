import { useState, useEffect } from 'react';
import Button from '../components/Button';

function useSomething() {
    
}

function CounterPage({ intialCount }) {
    // initialize the state object
    const [count, setCount] = useState(intialCount);

    // useEffect is a hook that allows you to perform side effects in function components
    useEffect(() =>{
        console.log(count);
    }, [count]);

    // handleClick is a function that will be called when the button is clicked
    const handleClick = () => {
        setCount(count + 1);
    };

    // handlePress is a function that will be called when the button is released
    // JSX expressions must have one parent element
    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={handleClick}>
            Increment
        </Button>
    </div>

}

export default CounterPage;