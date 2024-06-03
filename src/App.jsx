import { useRef, useState } from "react";

const App = () => {

  const [state, setState] = useState(0);
  const countRef = useRef(0);

  const handleRefIncrement = () => {
    countRef.current += 1;
    console.log(countRef.current);
  }

  const handleStateIncrement = () => {
    setState((prev) => {
      console.log(prev);
      return state + 1;
    });
  }

  console.log('component rendered');

  return (
    <>
      <h1>State Count: { state }</h1>
      <h1>Ref Count: {countRef.current}</h1>
      <button onClick={handleRefIncrement}>Increment Ref Count</button>
      <button onClick={handleStateIncrement}>Increment State Count</button>
    </>
  )
}

export default App;