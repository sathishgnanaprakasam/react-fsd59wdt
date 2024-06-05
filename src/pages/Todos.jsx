import axios from "axios";
import { useLoaderData } from "react-router-dom";

// define a loader function
export const loader = async () => {
    // make an async call to fetch data
    const todos = await axios.get(`https://665eb6121e9017dc16f10996.mockapi.io/todos`);

    // return the data
    return todos.data;
}

const Todos = () => {

    // use the data using the useLoader hook
    const todos = useLoaderData();

    console.log(todos);

  return (
      <div>
          <h1>Todo List</h1>
          <ul>
              {
                  todos.map(todo => (
                      <li key={todo.id}><strong>{todo.title}</strong><br /><em>{todo.description}</em></li>
                  ))
              }
          </ul>
    </div>
  )
}

export default Todos;