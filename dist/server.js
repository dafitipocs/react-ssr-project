"use strict";

require("babel-polyfill");

var _os = _interopRequireDefault(require("os"));

var _cluster = _interopRequireDefault(require("cluster"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var controllers = _interopRequireWildcard(require("./controllers"));

var middlewares = _interopRequireWildcard(require("./middlewares"));

var _configs = require("./configs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint no-console: "off" */
var app = (0, _express["default"])();

var cpus = _os["default"].cpus().length;

var isProduction = _configs.NODE_ENV === "production";
var assets = "dist/build";

if (isProduction) {
  assets = "build";
}

app.use(_express["default"]["static"](assets, {
  setHeaders: function setHeaders(response) {
    if (!isProduction) response.set("Cache-Control", "no-cache, no-store, must-revalidate");
  }
}));
app.set("x-powered-by", false);
/*
 * middlewares default
 */

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use(middlewares.hash);
/*
 * public routes
 */

app.use("/", controllers.home);
/*
 * custom middlewares
 */

/*
 * private routes
 */

/*
 * api routes
 */

/*
 * default route
 */
// app.use("*", (request, response) => response.redirect("/not-found"));

if (_cluster["default"].isMaster) {
  for (var i = 0; i < cpus; i++) {
    _cluster["default"].fork();
  }

  _cluster["default"].on("exit", function (worker, code, signal) {
    console.log("Worker ".concat(worker.process.pid, " died with code: ").concat(code, ", and signal: ").concat(signal, "."));
    console.log("Starting a new worker");

    _cluster["default"].fork();
  });
} else {
  app.listen(8080, function () {
    return console.log("http://localhost:".concat(8080));
  });
}