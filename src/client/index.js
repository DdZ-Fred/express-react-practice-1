import React from 'react';
import { render } from 'react-dom';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import rootReducer from 'reducers/';
import routes from 'routes';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// Object.assign Polyfill for IE and other non-compatible clients
Object.assign = Object.assign || require('object-assign');

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
