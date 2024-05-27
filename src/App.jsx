import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {

  const [count, setCount] = useState(0);

  const handleCountChange = (value) => {
    setCount(value);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Counter 
        onCountChange={handleCountChange}
      />
    </div>
  )
}

export default App;