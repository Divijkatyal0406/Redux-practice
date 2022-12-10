import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userStore from "./redux/userStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={userStore}>
      <App />
  </Provider>,
  document.getElementById("root")
);
