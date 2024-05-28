// passing data from App to Bin component (Parent to Child)

const Bin = ({ user }) => {
  return (
    <div>
      <p>Logged in User: { user }</p>
    </div>
  )
}

const App = () => {

  const loggedInUser = 'John Doe';

  return (
    <div>
      <h1>Data from App to Bin</h1>
      <Bin 
        user={loggedInUser}
      />
    </div>
  )
}

export default App;