import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "../store";

import Home from "../containers/home";

import "../assets/styles/main.scss";
import "../assets/styles/pages/home.scss";

const store = createStore();

hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("main")
);
