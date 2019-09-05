"use strict";

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _store = require("../store");

var _home = _interopRequireDefault(require("../containers/home"));

require("../assets/styles/main.scss");

require("../assets/styles/pages/home.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _store.createStore)();
(0, _reactDom.hydrate)(_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, _react["default"].createElement(_home["default"], null)), document.getElementById("main"));