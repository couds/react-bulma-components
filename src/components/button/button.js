import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const roles = [null].concat(Object.keys(CONSTANTS.ROLES).map(key => CONSTANTS.ROLES[key]));

const Button = ({
  children,
  className,
  style,
  renderAs,
  onClick,
  type,
  color,
  size,
  outlined,
  inverted,
  state,
  submit,
  reset,
  fill,
  loading,
  disabled,
  ...props
}) => {
  let Element = props.static ? 'span' : renderAs;
  const otherProps = {};
  if (submit) {
    Element = 'input';
    otherProps.type = 'submit';
  }
  if (reset) {
    Element = 'input';
    otherProps.type = 'reset';
  }
  return (
    <Element
      {...otherProps}
      style={style}
      disabled={disabled}
      onClick={onClick}
      className={classnames('button', className, {
        [`is-${type}`]: type,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [`is-${state}`]: state,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fill,
        'is-loading': loading,
      })}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOf(['a', 'button']),
  static: PropTypes.bool,
  type: PropTypes.oneOf(roles),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['white', 'black', 'light', 'dark', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['hover', 'focus', 'active', 'loading']),
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  submit: PropTypes.bool,
  reset: PropTypes.bool,
  loading: PropTypes.bool,
  fill: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  onClick: () => null,
  static: false,
  type: null,
  color: null,
  size: null,
  state: null,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fill: false,
  loading: false,
  disabled: false,
};

export default Button;
