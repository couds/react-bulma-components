import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import ButtonGroup from './components/button-group';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const colors = [null, ''].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

const Button = ({
  children,
  className,
  renderAs,
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
  isSelected,
  isStatic,
  rounded,
  onClick,
  text,
  ...props
}) => {
  // let Element = isStatic ? 'span' : renderAs;
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
        [`is-${state}`]: state,
        'is-selected': isSelected,
        'is-static': isStatic,
        'is-rounded': rounded,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fullwidth,
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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
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
  isSelected: PropTypes.bool,
  isStatic: PropTypes.bool,
  rounded: PropTypes.bool,
  text: PropTypes.bool,
};

Button.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'button',
  onClick: () => null,
  color: undefined,
  size: undefined,
  state: undefined,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fullwidth: false,
  loading: false,
  disabled: false,
  remove: false,
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false,
};

export default Button;
