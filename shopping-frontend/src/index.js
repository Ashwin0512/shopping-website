import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { AppRoutes } from "./util/AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <AppRoutes />
  </React.StrictMode>
);