Redux setup:

1. Install the dependencies:

```bash
npm install redux react-redux @reduxjs/toolkit
```

2. Create a slice:

- create a folder called `slices` or `features` in the `src` folder
- create another folder called `counter` inside the `slices` folder
- create a file called `counterSlice.js` inside the `counter` folder

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCount = (state) => state.counter.value;
```

3. Create a store:

- create a folder called `app` in the `src` folder
- create a file called `store.js` inside the `app` folder

```javascript
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../slices/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

4. Wrap your app with the `Provider` component:

- In your main.js file (e.g., `index.js`), import the `Provider` component and the `store` from the `store.js` file
- Wrap your app with the `Provider` component and pass the `store` as a prop

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

5. Use the Redux store in your components:

- In App.jsx, import the `useSelector` and `useDispatch` hooks from `react-redux`

```javascript
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./features/counter/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;
```
