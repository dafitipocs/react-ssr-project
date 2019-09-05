"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CancelToken = _axios["default"].CancelToken;

var _default = function _default(_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _constants.CALL_API) {
        dispatch({
          type: _constants.CANCEL_REQUESTS
        });
        if (action.animationStart) dispatch({
          type: action.animationStart
        });
        var cancelToken = new CancelToken(function (cancellation) {
          return dispatch({
            type: _constants.ADD_REQUEST_CANCELLATION,
            cancellation: cancellation
          });
        });
        (0, _axios["default"])(Object.assign({
          cancelToken: cancelToken
        }, action.metadata)).then(function (response) {
          if (action.animationEnd) dispatch({
            type: action.animationEnd
          });
          dispatch(Object.assign(action.success, {
            payload: response.data
          }));
        })["catch"](function (error) {
          if (action.animationEnd) dispatch({
            type: action.animationEnd
          });
          if (!_axios["default"].isCancel(error)) dispatch(action.error);
        });
      }

      next(action);
    };
  };
};

exports["default"] = _default;