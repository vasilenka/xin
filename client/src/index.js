import './app/assets/fonts/fonts';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import './app/assets/sass/grid.module.scss';

import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
