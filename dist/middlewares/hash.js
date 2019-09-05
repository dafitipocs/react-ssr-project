"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var middleware = function middleware(request, response, next) {
  try {
    var _require = require("../hash"),
        hash = _require.hash;

    request.hash = hash;
  } finally {
    return next();
  }
};

var _default = middleware;
exports["default"] = _default;