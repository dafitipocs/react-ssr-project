"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _home = _interopRequireDefault(require("../www/containers/home"));

var _react = _interopRequireDefault(require("../helpers/react"));

var _cookies = _interopRequireDefault(require("../configs/cookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var home = _express["default"].Router();

home.get("/",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var user, hash, headers, host, state, html, errors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              user = request.user, hash = request.hash, headers = request.headers;
              host = headers.host;
              state = {};
              html = (0, _react["default"])(_home["default"], {
                page: "home",
                state: state,
                hash: hash,
                host: host
              });
              response.send(html);
            } catch (error) {
              errors = "";

              if (error.message) {
                errors = error.response.error;
              }

              response.cookie("message", errors, _cookies["default"]);
              response.redirect("/");
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = home;
exports["default"] = _default;