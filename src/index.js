import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__, // index.server.js 에서 초기값으로 설정한 값 재사용
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
