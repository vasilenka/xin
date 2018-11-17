import styles from './Todo.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

const Todo = ({
  id,
  text,
  completed,
  todo,
  className,
  ...restProps
  }) => {
  return (
    <div className={classnames(styles.root)}>
      <Text
        label
        className={classnames({
          [styles.text]: true,
          [styles.completed]: completed
        })}>
        {text}
      </Text>
    </div>
  );
}

export default Todo;
