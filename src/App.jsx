import './App.css';

const App = () => {

  const handleChange = (e) => {
    console.log(e.target.value);
  }  

  return (
    <div>
      <h1 className="header">React App</h1>
      <input 
        type="text"
        onChange={handleChange}
      />
    </div>
  )
}

export default App;