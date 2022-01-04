import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
