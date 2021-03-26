import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import ButtonGroup from './components/button-group';
import Element from '../element';

const colors = [null, ''].concat(Object.values(CONSTANTS.COLORS));

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
  focused,
  hovered,
  active,
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
      renderAs: renderAs || 'button',
    };
  }
  if (reset) {
    otherProps = {
      type: 'reset',
      renderAs: renderAs || 'button',
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
        'is-hovered': hovered,
        'is-focused': focused,
        'is-active': active,
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
  ...Element.propTypes,
  /**
   * Children of Button.
   */
  children: PropTypes.node,
  /**
   * Additional CSS classes to pass to Button.
   */
  className: PropTypes.string,
  /**
   * React style object for Button.
   */
  style: PropTypes.shape({}),
  /**
   * Callback function when Button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Color of Button
   */
  color: PropTypes.oneOf(colors),
  /**
   * Size of Button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
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
};

Button.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'button',
  onClick: () => null,
  color: undefined,
  size: undefined,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fullwidth: false,
  hovered: false,
  focused: false,
  active: false,
  loading: false,
  disabled: false,
  remove: false,
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false,
};

export default Button;
