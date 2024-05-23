const App = () => {

  const isLoggedIn = false;

  return (
    <div>
      {
        isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>
      }
    </div>
  )
}

export default App;