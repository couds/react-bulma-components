import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Icon = ({
  icon,
  size,
  color,
  className,
  style,
  align,
  children,
}) => (
  <span
    style={style}
    className={classnames('icon', className, {
      [`is-${size}`]: size,
      [`is-${align}`]: align,
      [`has-text-${color}`]: color,
})}
  >
    { children || (
      <i
        className={classnames('rbc', {
          [`rbc-${icon}`]: icon,
        })}
      />
    )}
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors),
};

Icon.defaultProps = {
  className: '',
  style: {},
  size: null,
  color: null,
  children: null,
  align: null,
};

export default Icon;
