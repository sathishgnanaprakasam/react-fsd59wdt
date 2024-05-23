import Todo from "./components/Todo";

const App = () => {

  const todos = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy bread', completed: true },
    { id: 3, title: 'Buy butter', completed: false },
  ]

  return (
    <div>
      <h1>Todo List</h1>
      {
        todos.map(todo => 
          <Todo 
            key={todo.id}
            todo={todo}
          />
        )
      }
    </div>
  )
}

export default App;