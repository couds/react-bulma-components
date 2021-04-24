import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonGroup from './components/button-group';
import Element from '../element';
import { normalizeStatus } from '../../services/normalizer';

const Button = ({
  children,
  className,
  renderAs,
  color,
  size,
  outlined,
  inverted,
  submit,
  reset,
  fullwidth,
  status,
  loading,
  disabled,
  remove,
  isSelected,
  isStatic,
  rounded,
  onClick,
  text,
  ...props
}) => {
  let otherProps = {};
  if (submit) {
    otherProps = {
      type: 'submit',
      renderAs: 'button',
    };
  }
  if (reset) {
    otherProps = {
      type: 'reset',
      renderAs: 'button',
    };
  }

  if (isStatic) {
    otherProps = {
      renderAs: 'span',
    };
  }

  return (
    <Element
      tabIndex={disabled ? -1 : 0}
      renderAs={renderAs}
      {...props}
      {...otherProps}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={classnames(className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        'is-selected': isSelected,
        'is-static': isStatic,
        'is-rounded': rounded,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fullwidth,
        [`is-${normalizeStatus(status)}`]: status,
        'is-loading': loading,
        'is-text': text,
        delete: remove,
        button: !remove,
      })}
    >
      {children}
    </Element>
  );
};

Button.Group = ButtonGroup;

Button.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
      'black-bis',
      'black-ter',
      'white-bis',
      'white-ter',
      'grey-darker',
      'grey-dark',
      'grey-light',
      'grey-lighter',
    ]),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * Whether Button should have an outline.
   */
  outlined: PropTypes.bool,
  /**
   * Whether Button should have an inverted color scheme. Useful when button is used on colored background
   */
  inverted: PropTypes.bool,
  submit: PropTypes.bool,
  reset: PropTypes.bool,
  status: PropTypes.oneOf(['focus', 'hover', 'active']),
  loading: PropTypes.bool,
  /**
   * Whether Button should occupy the full width of parent
   */
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  remove: PropTypes.bool,
  /**
   * Whether Button is selected. Useful in a Button.Group.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether Button is non-interactive/static.
   */
  isStatic: PropTypes.bool,
  /**
   * Whether Button should have fully-rounded corners
   */
  rounded: PropTypes.bool,
  /**
   * Whether Button is a text button.
   */
  text: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Button.defaultProps = {
  renderAs: 'button',
};

export default Button;
