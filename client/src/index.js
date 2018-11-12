import './app/assets/fonts/fonts';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { CreateStore, applyMiddleware, createStore } from 'redux';

import './app/assets/sass/grid.module.scss';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
