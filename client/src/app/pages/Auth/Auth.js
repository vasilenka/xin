import styles from './Auth.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { ReactComponent as Google } from './google.svg';

import Text from './../../components/Text/Text';
import Button from './../../components/Button/Button';
import Header from './../../components/Header/Header';
import Body from './../../components/Body/Body';

import Tick from './../../components/Tick/Tick';

class Auth extends Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData = function() {

  }

  componentDidMount = () => {
    let params = String(window.location.search)
    let token = params.replace('?token=', '')
    localStorage.setItem('token', token)
  }

  componentDidUpdate = () => {
    let token = JSON.parse(localStorage.getItem('tokens'));
    console.log(token);
  }

  render() {
    return (
      <div className={classnames(styles.root)}>
        <Header/>
        <Body center>
          <Text className={classnames(styles.greet)} display2 component="h1">
            Xin.
            <span role="img" aria-label="let's start the fire">🔥</span>
          </Text>
          <Tick />
          <a href="/auth/google">
            <Button normal className={styles.googleLogin}>
              <Google className={classnames(styles.logo)}/>
              Sign in with google
            </Button>
          </a>
        </Body>
      </div>
    )
  }
}

export default Auth;
