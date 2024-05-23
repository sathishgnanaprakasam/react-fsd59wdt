import Hello from "./components/Hello";

// Component: App
const App = () => {

  const a = 20;
  const b = 10;
  const now = new Date();

  return (
    <div>
      Date: {now.toString()}
      <p>{a} plus {b} is {a+b}</p>
    </div>
  )
}

export default App;