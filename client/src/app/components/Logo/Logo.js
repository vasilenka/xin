import styles from './Logo.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

const Logo = ({
  className
  }) => {
  return (
    <div className={classnames(styles.root)}>
      <Text className={classnames(styles.logo)} heading3 component="h1">
        Xin.
      </Text>
      <span className={classnames(styles.emoji)} role="img" aria-label="let's get lit!">🔥</span>
    </div>
  );
}

export default Logo;
