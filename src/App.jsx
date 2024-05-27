import { useEffect, useState } from "react";
import Counter from "./components/Counter";

const App = () => {

  let [count, setCount] = useState(0);
  let [history, setHistory] = useState([]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  const handleIncrement = () => {
    setCount(count + 1);
    setHistory([...history, 'I']);
  }

  const handleDecrement = () => {
    setCount(count - 1);
    setHistory([...history, 'D']);
  }

  const handleReset = () => {
    setCount(0);
    setHistory([...history, 'R']);
  }

  return (
    <div>
      <Counter 
        count={count}
        history={history}
      />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App;