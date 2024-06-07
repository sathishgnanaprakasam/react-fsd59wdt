import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from './features/counter/counterSlice';

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>Counter: { count }</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App;