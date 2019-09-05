import express from "express";
import Home from "../www/containers/home";
import render from "../helpers/react";
import cookieOptions from "../configs/cookies";

const home = express.Router();

home.get("/", async (request, response) => {
  try {
    const { user, hash, headers } = request;

    const { host } = headers;

    const state = {};

    const html = render(Home, {
      page: "home",
      state,
      hash,
      host
    });
    response.send(html);
  } catch (error) {
    let errors = "";
    if (error.message) {
      errors = error.response.error;
    }
    response.cookie("message", errors, cookieOptions);
    response.redirect("/");
  }
});

export default home;
