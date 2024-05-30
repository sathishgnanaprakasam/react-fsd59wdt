import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as notesLoader } from "./pages/Home";
import Note from "./pages/Note";
import Users, { userLoader } from "./pages/Users";
import User, { usrLoader } from "./pages/User";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: notesLoader
  },
  {
    path: "/notes/:id",
    element: <Note />,
    loader: notesLoader
  },
  {
    path: "/users",
    element: <Users />,
    loader: userLoader
  },
  {
    path: "/users/:id",
    element: <User />,
    loader: usrLoader
  }
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