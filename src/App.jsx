import { useRef, useState } from "react";

// Component: App
const App = () => {

  const [state, setState] = useState(0);

  // create a reference using useRef hook
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input element here
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  }

  const handleChange = () => {
    inputRef.current.value = "Hello World"; // This will not trigger re-render
    setState(state + 1); // This will trigger re-render
  }

  console.log('rendering component'); // This will be called on every state change

  return (
    <>
      <input 
        type="text"
        ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
      <button onClick={handleChange}>Change Value</button>
    </>
  )
}

export default App;