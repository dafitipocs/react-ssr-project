"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _banner = _interopRequireDefault(require("../../banner"));

var _jumbotron = _interopRequireDefault(require("../../jumbotron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TemplateHome =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TemplateHome, _React$PureComponent);

  function TemplateHome(props) {
    var _this;

    _classCallCheck(this, TemplateHome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateHome).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(TemplateHome, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: "container-banner"
      }, _react["default"].createElement(_banner["default"], null)), _react["default"].createElement(_jumbotron["default"], null));
    }
  }]);

  return TemplateHome;
}(_react["default"].PureComponent);

TemplateHome.propTypes = {
  history: _propTypes["default"].object,
  catalog: _propTypes["default"].array,
  banners: _propTypes["default"].array
};
var _default = TemplateHome;
exports["default"] = _default;