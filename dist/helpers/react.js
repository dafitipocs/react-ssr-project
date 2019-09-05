"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _store = require("../www/store");

var _resolveThemeName = _interopRequireDefault(require("./resolve-theme-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TITLE = "Site Side Server Render";

var render = function render(Component, _ref) {
  var page = _ref.page,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? {} : _ref$state,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? null : _ref$hash,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? TITLE : _ref$title,
      host = _ref.host;
  var store = (0, _store.createNodeStore)(state);
  var serializedState = JSON.stringify(store.getState());
  var theme = (0, _resolveThemeName["default"])(host);
  var tag = "";

  if (hash) {
    tag = "?".concat(hash);
  }

  var body = (0, _server.renderToString)(_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(Component, null)));
  return "\n    <!DOCTYPE html>\n    <html lang=\"pt-br\">\n    <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n      <link rel=\"stylesheet\" href=\"/assets/css/themes/".concat(theme, ".css").concat(tag, "\">\n      <link rel=\"stylesheet\" href=\"/assets/css/").concat(page, ".css").concat(tag, "\">\n      <title>").concat(title, "</title>\n    </head>\n    <body>\n      <div id=\"main\">").concat(body, "</div>\n      <script type=\"text/javascript\">\n        window.__state__ = ").concat(serializedState, ";\n      </script>\n      <script src=\"/libs.js").concat(tag, "\"></script>\n      <script type=\"application/javascript\" src=\"/").concat(page, ".js").concat(tag, "\"></script>\n    </body>\n    </html>\n  ");
};

var _default = render;
exports["default"] = _default;