import styles from './Header.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';
import Button from './../Button/Button';
import Logo from './../Logo/Logo';
import Section from './../Section/Section';

class Header extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.container)}>
          <Logo />
          {/* <Text normal>let's get lit!</Text> */}
        </div>
      </div>
    );
  }
}

export default Header;
