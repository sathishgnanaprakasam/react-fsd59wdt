import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <div><Link to="/register">Register</Link> &nbsp;&nbsp; | &nbsp;&nbsp;<Link to="/login">Login</Link></div>
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);


const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;

/*
  Exercise: 

  1. Create a new route for the path "/contact" with the element <h1>Contact Us</h1>
  2. Create a new route for the path "/services" with the element <h1>Our Services</h1>
  3. Create a new route for the path "/products" with the element <h1>Our Products</h1>
*/