const App = () => {

  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {!isLoggedIn && <h1>Please login!</h1> }
    </div>
  )
}

export default App;