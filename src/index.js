import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./Components/App/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route to="/" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
