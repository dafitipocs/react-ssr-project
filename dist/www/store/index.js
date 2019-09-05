"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = exports.createNodeStore = void 0;

var redux = _interopRequireWildcard(require("redux"));

var _reducers = _interopRequireDefault(require("../reducers"));

var _apis = _interopRequireDefault(require("../middlewares/apis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/* eslint no-underscore-dangle: "off" */

/* eslint scanjs-rules/property_sessionStorage: off */

/* eslint scanjs-rules/identifier_sessionStorage: off */

/* eslint scanjs-rules/property_localStorage: off */

/* eslint scanjs-rules/identifier_localStorage: off */
function clearCache() {
  window.sessionStorage.clear();
  window.localStorage.clear();
}

var createNodeStore = function createNodeStore(state) {
  return redux.createStore(_reducers["default"], state);
};

exports.createNodeStore = createNodeStore;

var createStore = function createStore() {
  clearCache();
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  return redux.createStore(_reducers["default"], window.__state__, composeEnhancers(redux.applyMiddleware(_apis["default"])));
};

exports.createStore = createStore;