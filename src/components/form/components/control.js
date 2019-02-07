import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const Control = React.forwardRef(
  ({ children, className, fullwidth, iconLeft, iconRight, loading, size, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      className={cn('control', className, {
        'is-expanded': fullwidth,
        'has-icons-left': iconLeft,
        'has-icons-right': iconRight,
        'is-loading': loading,
        [`is-${size}`]: size
      })}
    >
      {children}
    </Element>
  )
);

Control.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fullwidth: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES))
};

Control.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  fullwidth: false,
  iconLeft: false,
  iconRight: false,
  loading: false,
  size: null
};
