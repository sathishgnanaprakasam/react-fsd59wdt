import { RouterProvider, createBrowserRouter } from "react-router-dom";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World!!</h1>
  }
]);


const App = () => {
  return <RouterProvider router={router} />;
}

export default App;