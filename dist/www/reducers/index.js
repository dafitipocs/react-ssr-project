"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _user = _interopRequireDefault(require("./user"));

var _banners = _interopRequireDefault(require("./banners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  user: _user["default"],
  banners: _banners["default"]
});
var _default = reducers;
exports["default"] = _default;