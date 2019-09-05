"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.is = void 0;
var is = {
  productUnavailable: function productUnavailable(price) {
    return price <= 0;
  }
};
exports.is = is;
var booleans = {
  is: is
};
var _default = booleans;
exports["default"] = _default;