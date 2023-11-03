import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopOnPageChange />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
