import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Browser from "./Component/Browser";
import DetailPage from "./Component/DetailPage";
import Bookmark from "./Component/Bookmark";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/browser",
    element: <Browser />,
  },

  {
    path: "/detailPage",
    element: <DetailPage />,
  },

  {
    path: "/bookmark",
    element: <Bookmark />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
