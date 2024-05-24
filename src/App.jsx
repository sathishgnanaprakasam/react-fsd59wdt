// Functional Component with arrow function
// const App = () => {
//   return (
//     <div>
//       <h1>My React App</h1>
//     </div>
//   )
// }

// export default App;

// Functional Component with function
// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//     </div>
//   )
// }

// export default App;

// Class Component

import { Component } from "react";
import Hello from "./components/Hello";

class App extends Component {
  // override the render method
  render() {
    // return JSX
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;