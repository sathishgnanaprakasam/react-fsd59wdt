import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos from "./pages/Todos";
import { loader as todosLoader } from "./pages/Todos";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
    // link the loader function to the route
    loader: todosLoader
  }
]);


const App = () => {
  return <RouterProvider router={router} />;
}

export default App;