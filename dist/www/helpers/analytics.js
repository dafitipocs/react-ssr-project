"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackingView = trackingView;
exports.sendEvent = sendEvent;

var _reactGa = _interopRequireDefault(require("react-ga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint import/prefer-default-export: "off" */
var enabled = process.env.NODE_ENV === 'production';

if (enabled) {
  _reactGa["default"].initialize('UA-119560283-1');
}

function trackingView(page) {
  if (enabled) {
    _reactGa["default"].pageview(page);
  }
}

function sendEvent(category, action) {
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var event = {
    category: category,
    action: action
  };

  if (label) {
    event.label = label;
  }

  if (value) {
    event.value = value;
  }

  if (enabled) {
    _reactGa["default"].event(event);
  }
}