import { useState, useEffect } from 'react';


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

export default useCounter;