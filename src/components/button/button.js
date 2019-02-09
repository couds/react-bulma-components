import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import ButtonGroup from './components/button-group';

const colors = Object.values(CONSTANTS.COLORS);

export const Button = React.forwardRef(
  (
    {
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
      ...allProps
    },
    ref
  ) => {
    let Element = isStatic ? 'span' : renderAs;
    const props = modifiers.clean(allProps);
    const otherProps = {};
    if (submit) {
      Element = 'button';
      otherProps.type = 'submit';
    }
    if (reset) {
      Element = 'button';
      otherProps.type = 'reset';
    }

    return (
      <Element
        ref={ref}
        tabIndex={disabled ? -1 : 0}
        {...props}
        {...otherProps}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        className={cn(className, modifiers.getClassName(allProps), {
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
          button: !remove
        })}
      >
        {children}
      </Element>
    );
  }
);

Button.Group = ButtonGroup;

Button.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.oneOf(['a', 'button', 'span']), PropTypes.func]),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  state: PropTypes.oneOf([null, 'hover', 'focus', 'active', 'loading']),
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
  text: PropTypes.bool
};

Button.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'button',
  onClick: () => {},
  color: null,
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
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false
};
