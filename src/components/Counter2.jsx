import { useReducer } from "react";
import { countReducer, initialState } from '../reducers/countReducer';

const Counter2 = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  }

  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  }
  
  return (
    <div>
      <h1>Count: { state.count }</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2