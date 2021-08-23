import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "modern-normalize/modern-normalize.css";

import App from "./App";
import store from "Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
