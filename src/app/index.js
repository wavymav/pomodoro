import React from 'react'
import ReactDOM from 'react-dom'
import App  from './containers'
import * as reducers from './reducers'
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

const timer = combineReducers(reducers)

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);
const store = createStoreWithMiddleware(timer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
