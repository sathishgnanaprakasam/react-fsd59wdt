import { RouterProvider, createBrowserRouter } from "react-router-dom";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello, World!!</h1>
  },
  {
    path: "/about",
    element: <h1>About Us</h1>
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