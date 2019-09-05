"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var DEFAULT = {
  id: "",
  email: "",
  clientId: "",
  lastName: "",
  firstName: "Visitante!",
  scopes: [],
  customData: {
    vendorId: "",
    customerId: ""
  }
};

function _default() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT;
  return user;
}