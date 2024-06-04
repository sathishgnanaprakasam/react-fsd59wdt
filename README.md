# React- Day -9: useRef & useReducer

## Contents:

-[x] useRef, useReducer

useRef:

- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
- useRef is like a “box” that can hold a mutable value in its .current property.
- Changes made to .current do not cause a re-render.

useReducer:

- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values.
- useReducer lets us to manage the state in a centralized way.
- useReducer is a hook that is used for state management in React. It is an alternative to useState.
- useReducer is related to reducers in Redux.

-[ ] Front end game demonstration - hangman / tictactoe / tile match
