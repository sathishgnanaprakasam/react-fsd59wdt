# React- Day -6: Router

## Contents:

-[x] react-router-dom

- Traditional web applications render new pages by making a request to the server for a new page. The server then responds with the new page, and the browser loads it.
- Single Page Applications (SPAs) work differently. They load a single HTML page and dynamically update that page as the user interacts with the app.
- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.

In React, by default

- History will not be updated when we navigate to different components.
- URL will not be updated when we navigate to different components.
- Based on the URL, the component will not be rendered.

React Router solves these problems by providing a `BrowserRouter` component, which uses the HTML5 history API to keep your UI in sync with the URL.

-[ ] BrowserRouter, Switch, Link, Route, URL params

- BrowserRouter: It is a component that wraps the application and provides routing capabilities to the application.
- createBrowserRouter: It is a function that creates a BrowserRouter instance.
- Outlet: It is a component that renders the matched route's component.

session task on the admin dashboard
https://startbootstrap.com/previews/sb-admin-2

Task: https://docs.google.com/document/d/1nuVbWYwyP7N1zC9rAoO0taVvthGWsaHH-nfhNdklTQw/edit
