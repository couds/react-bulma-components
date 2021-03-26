import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import CONSTANTS from '../../constants';
import Element from '../element';

const colors = [undefined].concat(Object.values(CONSTANTS.COLORS));

const Icon = ({ size, color, className, align, children, ...props }) => (
  <Element
    renderAs="span"
    {...props}
    className={classnames('icon', className, {
      [`is-${size}`]: size,
      [`is-${align}`]: align,
      [`has-text-${color}`]: color,
    })}
  >
    {children}
  </Element>
);

Icon.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors),
};

Icon.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
  children: null,
  align: undefined,
};

export default Icon;
