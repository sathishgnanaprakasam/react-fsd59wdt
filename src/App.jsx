import { useRef } from "react";

// Component: App
const App = () => {

  // create a reference using useRef hook
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input element here
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <>
      <input 
        type="text"
        ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
    </>
  )
}

export default App;