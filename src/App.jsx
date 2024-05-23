const App = () => {

  const friends = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Peter', age: 30 },
    { id: 3, name: 'Mark', age: 40}
  ]

  const listFriends = [];
  for (let i = 0; i < friends.length; i++){
    listFriends.push(
      <li key={friends[i].id}>{friends[i].name} {friends[i].age}</li>
    )
  }

  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {listFriends}
      </ul>
    </div>
  )
}

export default App;