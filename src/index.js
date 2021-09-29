import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseApp } from "./service/firebase";
import FetchItem from "./service/fetch-item";
import "./assets/styles/index.css";

const fetchItem = new FetchItem(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App fetchItem={fetchItem} />
  </React.StrictMode>,
  document.getElementById("root")
);
