// passing data from Bin to App

import { useState } from "react";

const Bin = ({ sendData }) => {

  const loggedInUser = 'John Doe';

  return (
    <div>
      <h1>Data from Bin to App</h1>
      <p>Data in Bin: {loggedInUser}</p>
      <button onClick={() => { sendData(loggedInUser) }}>Send Data</button>
    </div>
  )
}

const App = () => {

  const [user, setUser]  = useState('');

  const receiveData = (loggedInUser) => {
    setUser(loggedInUser);
  }

  return (
    <div>
      <Bin 
        sendData={receiveData}
      />
      <p>Data in App: {user}</p>
    </div>
  )
}

export default App;