import styles from './Button.module.scss';
import React from 'react';
import classnames from 'classnames';

const Button = ({
  children,
  normal,
  primary,
  secondary,
  tertiary,
  primary_full,
  secondary_full,
  className,
  small,
  large,
  outline,
  outline_full,
  handleClick,
  ...restProps
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={classnames({
        [styles.normal]: normal,
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.tertiary]: tertiary,
        [styles.outline]: outline,
        [styles.primary_full]: primary_full,
        [styles.outline_full]: outline_full,
        [styles.secondary_full]: secondary_full,
        [styles.large]: large,
        [styles.small]: small,
        [className]: className
      })}
    >
      {children}
    </button>
  );
};

export default Button;
