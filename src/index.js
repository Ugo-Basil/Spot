import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./utils/StateProvider";
import Reducer, { initialState } from "./utils/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider intialState={initialState} reducer={Reducer}>
    <App />
  </StateProvider>
);
