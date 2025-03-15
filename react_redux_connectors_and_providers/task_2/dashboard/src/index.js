import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import uiReducer from "./reducers/uiReducer";
import App from "./App/App";
import { applyMiddleware } from "redux";

const store = createStore(uiReducer, applyMiddleware(thunk));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
