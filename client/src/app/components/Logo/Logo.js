import styles from './Logo.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

const Logo = ({
  className
  }) => {
  return (
    <div className={classnames(styles.root)}>
      <Text className={classnames(styles.logo)} heading3 Component="h1">
        Xin.
      </Text>
      <Text role="img" aria-label="let's get lit!" heading3>
        🔥
      </Text>
    </div>
  );
}

export default Logo;
