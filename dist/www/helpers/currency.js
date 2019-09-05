"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalCurrency = void 0;

/* eslint import/prefer-default-export: "off" */

/* eslint security/detect-unsafe-regex: "off" */
var setLocalCurrency = function setLocalCurrency(value) {
  return "R$ ".concat(value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.'));
};

exports.setLocalCurrency = setLocalCurrency;