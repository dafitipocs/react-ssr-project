"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphQLService = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var graphQLService =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var method, query, props, endPoint, myQuery, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _ref.method, query = _ref.query, props = _ref.props, endPoint = _ref.endPoint;
            myQuery = {
              query: "\n      query\n      {\n        ".concat(query, " {\n          ").concat(props.map(function (prop) {
                return prop;
              }), "\n        }\n      }\n    ")
            };
            _context.next = 4;
            return (0, _axios["default"])({
              method: method,
              headers: {
                "Content-Type": "application/json"
              },
              url: "",
              data: myQuery
            }).then(function (response) {
              return response.data;
            });

          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function graphQLService(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.graphQLService = graphQLService;