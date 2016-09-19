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

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
