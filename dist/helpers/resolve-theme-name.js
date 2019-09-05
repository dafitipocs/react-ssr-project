"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _webpack = _interopRequireDefault(require("../../webpack.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var themeNames = Object.keys(_webpack["default"].entry).filter(function (key) {
  return /^themes/.test(key);
}).map(function (name) {
  return name.replace('themes/', '');
});

var resolveThemeName = function resolveThemeName() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var defaultTheme = 'default';
  var theme = host ? themeNames.filter(function (name) {
    return host.indexOf(name) > -1;
  }) : [];
  return theme.length ? theme[0] : defaultTheme;
};

var _default = resolveThemeName;
exports["default"] = _default;