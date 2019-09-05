"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;

/* eslint import/prefer-default-export: "off" */

/* eslint security/detect-unsafe-regex: "off" */
function formatDate(date) {
  var newDate = new Date(date);
  var dd = newDate.getDate();
  var mm = newDate.getMonth() + 1; // January is 0!

  var yyyy = newDate.getFullYear();

  if (dd < 10) {
    dd = "0".concat(dd);
  }

  if (mm < 10) {
    mm = "0".concat(mm);
  }

  var formatedDate = "".concat(dd, "/").concat(mm, "/").concat(yyyy);
  return formatedDate;
}