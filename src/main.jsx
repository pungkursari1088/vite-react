import React from "react";
import ReactDOM from "react-dom/client";
import LifeCycleCom from "./containers/LifeCycleComp/LifeCycleCom";
// import App from "./App";
import Home from "./containers/Home";
// import Product from "./containers/Product/Product";
import "./index.css";
import BlogPost from "./containers/BlogPost/BlogPost";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>{/* <Product /> */ <LifeCycleCom />}</React.StrictMode>
  <React.StrictMode>{<Home />}</React.StrictMode>
);
