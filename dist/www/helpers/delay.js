"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint scanjs-rules/call_setTimeout: 0 */
var _default = function _default(callback, timing) {
  return setTimeout(callback, timing);
};

exports["default"] = _default;