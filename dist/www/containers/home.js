"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _home = _interopRequireDefault(require("../pages/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var properties = function properties(_ref) {
  _objectDestructuringEmpty(_ref);

  return {};
};

var _default = (0, _reactRedux.connect)(properties)(_home["default"]);

exports["default"] = _default;