"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

/* eslint import/no-mutable-exports: off */
var config = {
  httpOnly: true,
  sameSite: 'strict'
};

if (_.FORCE_SSL === 'true') {
  config = {
    httpOnly: true,
    sameSite: 'strict',
    secure: true
  };
}

var _default = config;
exports["default"] = _default;