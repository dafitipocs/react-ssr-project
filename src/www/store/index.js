/* eslint no-underscore-dangle: "off" */
/* eslint scanjs-rules/property_sessionStorage: off */
/* eslint scanjs-rules/identifier_sessionStorage: off */
/* eslint scanjs-rules/property_localStorage: off */
/* eslint scanjs-rules/identifier_localStorage: off */

import * as redux from 'redux';
import reducers from '../reducers';

import apis from '../middlewares/apis';


function clearCache() {
  window.sessionStorage.clear();
  window.localStorage.clear();
}

export const createNodeStore = state => redux.createStore(reducers, state);

export const createStore = () => {
  clearCache();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  return redux.createStore(reducers, window.__state__, composeEnhancers(
    redux.applyMiddleware(apis)
  ));
};
