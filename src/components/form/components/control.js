import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const Control = ({
  children,
  className,
  fullwidth,
  iconLeft,
  iconRight,
  loading,
  size,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('control', className, {
      'is-expanded': fullwidth,
      'has-icons-left': iconLeft,
      'has-icons-right': iconRight,
      'is-loading': loading,
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Control.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  fullwidth: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Control.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  fullwidth: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  loading: undefined,
  size: undefined,
};

export default Control;
