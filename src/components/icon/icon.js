import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import Element from '../element';

const colors = [undefined].concat(Object.values(CONSTANTS.COLORS));

const Icon = ({ size, color, className, align, children, ...props }) => (
  <Element
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
  ...Element.propTypes,
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors),
};

Icon.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
  children: null,
  align: undefined,
  renderAs: 'span',
};

export default Icon;
