import { useState } from "react";

const App = () => {

  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
}

export default App;