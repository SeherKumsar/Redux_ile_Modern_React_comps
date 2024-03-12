import { useState } from "react";
import Button from "../components/Button";
// import useCounter from '../hooks/use-counter';
import Panel from "../components/Panel";

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
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form>
        <label>Add a lot!</label>
        <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
