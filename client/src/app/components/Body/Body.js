import styles from './Body.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class Body extends Component {
  render() {
    const {children, center} = this.props;
    return (
      <div className={classnames({
          [styles.root]: true,
          [styles.center]: center
        })}>
        {children}
      </div>
    );
  }
}

export default Body;
