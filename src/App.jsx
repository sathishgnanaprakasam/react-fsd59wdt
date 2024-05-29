import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:id",
    element: <Note />,
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