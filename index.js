import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/index.css";

import { ShowState } from "./context/ShowContext";
import { AlertState } from "./context/AlertContext";

ReactDOM.render(
  <React.StrictMode>
    <ShowState>
      <AlertState>
        <App />
      </AlertState>
    </ShowState>
  </React.StrictMode>,
  document.getElementById("root")
);
