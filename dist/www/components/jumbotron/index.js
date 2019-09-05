"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _blog = _interopRequireDefault(require("../blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Jumbotron, null, _react["default"].createElement(_blog["default"], null)));
};

var _default = Example;
exports["default"] = _default;