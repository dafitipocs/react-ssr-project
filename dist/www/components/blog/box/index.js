"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Box = function Box(props) {
  return _react["default"].createElement("div", {
    className: "col-md-4"
  }, _react["default"].createElement("div", {
    className: "card mb-4 shadow-sm"
  }, _react["default"].createElement("svg", {
    className: "bd-placeholder-img card-img-top",
    width: "100%",
    height: "225",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid slice",
    focusable: "false",
    role: "img",
    "aria-label": "Placeholder: Thumbnail"
  }, _react["default"].createElement("title", null, props.item.title), _react["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "#55595c"
  }), _react["default"].createElement("text", {
    x: "50%",
    y: "50%",
    fill: "#eceeef",
    dy: ".3em"
  }, props.item.thumbnail)), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("p", {
    className: "card-text"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), _react["default"].createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, _react["default"].createElement("div", {
    className: "btn-group"
  }, _react["default"].createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-secondary"
  }, "View"), _react["default"].createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-secondary"
  }, "Edit")), _react["default"].createElement("small", {
    className: "text-muted"
  }, "9 mins")))));
};

var _default = Box;
exports["default"] = _default;