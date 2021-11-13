import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

function Button({ children, type, size, disabled, className, ...props }) {
  const classes = clsx(styles.button, {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
    [styles.full]: size === 'full',
    [styles.isDisabled]: disabled,
  });

  return (
    <button className={clsx(classes, className)} type={type} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
