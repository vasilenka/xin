import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import { BrowserRouter, Route } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Auth}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
