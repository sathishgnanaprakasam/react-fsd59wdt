import Hello from "./components/Hello";

// Component: App
const App = () => {

  const name = 'Peter';

  return (
    <div>
      <Hello 
        name={name}
      />
    </div>
  )
}

export default App;