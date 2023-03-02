import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./containers/Home";
import Product from "./containers/Product/Product";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
);
