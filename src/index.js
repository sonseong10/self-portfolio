import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseApp } from "./service/firebase";
import { BrowserRouter } from "react-router-dom";
import FetchItem from "./service/fetch-item";
import "./assets/styles/index.css";

const fetchItem = new FetchItem(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App fetchItem={fetchItem} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
