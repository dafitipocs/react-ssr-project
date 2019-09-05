/* eslint no-console: "off" */

import "babel-polyfill";

import os from "os";
import cluster from "cluster";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import * as controllers from "./controllers";
import * as middlewares from "./middlewares";
import { NODE_ENV } from "./configs";

const app = express();
const cpus = os.cpus().length;

const isProduction = NODE_ENV === "production";
let assets = "dist/build";

if (isProduction) {
  assets = "build";
}

app.use(
  express.static(assets, {
    setHeaders(response) {
      if (!isProduction)
        response.set("Cache-Control", "no-cache, no-store, must-revalidate");
    }
  })
);
app.set("x-powered-by", false);

/*
 * middlewares default
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
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

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}.`
    );
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  app.listen(8080, () => console.log(`http://localhost:${8080}`));
}
