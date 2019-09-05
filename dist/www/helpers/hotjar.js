"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;

var _reactHotjar = require("react-hotjar");

/* eslint import/prefer-default-export: "off" */
function initialize(hjId, hjSv) {
  _reactHotjar.hotjar.initialize(hjId, hjSv);
}