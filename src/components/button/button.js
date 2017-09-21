import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Button = ({
  children,
  className,
  style,
  renderAs,
  onClick,
  color,
  size,
  outlined,
  inverted,
  state,
  submit,
  reset,
  fullwidth,
  loading,
  disabled,
  remove,
  link,
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
      className={classnames(className, {
        'is-link': link,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [`is-${state}`]: state,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fullwidth,
        'is-loading': loading,
        delete: remove,
        button: !remove,
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
  onClick: PropTypes.func,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['hover', 'focus', 'active', 'loading']),
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  submit: PropTypes.bool,
  reset: PropTypes.bool,
  loading: PropTypes.bool,
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  remove: PropTypes.bool,
  link: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  onClick: () => null,
  static: false,
  color: null,
  link: false,
  size: null,
  state: null,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fullwidth: false,
  loading: false,
  disabled: false,
  remove: false,
};

export default Button;
