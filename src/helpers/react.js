import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createNodeStore } from "../www/store";
import resolveThemeName from "./resolve-theme-name";

const TITLE = "Site Side Server Render";

const render = (
  Component,
  { page, state = {}, hash = null, title = TITLE, host }
) => {
  const store = createNodeStore(state);
  const serializedState = JSON.stringify(store.getState());
  const theme = resolveThemeName(host);

  let tag = "";

  if (hash) {
    tag = `?${hash}`;
  }

  const body = renderToString(
    <Provider store={store}>
      <Component />
    </Provider>
  );

  return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <link rel="stylesheet" href="/assets/css/themes/${theme}.css${tag}">
      <link rel="stylesheet" href="/assets/css/${page}.css${tag}">
      <title>${title}</title>
    </head>
    <body>
      <div id="main">${body}</div>
      <script type="text/javascript">
        window.__state__ = ${serializedState};
      </script>
      <script src="/libs.js${tag}"></script>
      <script type="application/javascript" src="/${page}.js${tag}"></script>
    </body>
    </html>
  `;
};

export default render;
