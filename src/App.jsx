import { useEffect, useState } from "react";
import Counter from "./components/Counter";

const App = () => {

  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Counter 
        count={count}
      />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App;