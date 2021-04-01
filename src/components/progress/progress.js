import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Progress = ({ className, value, max, color, size, ...props }) => (
  <Element
    {...props}
    value={value}
    max={max}
    className={classnames('progress', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size,
    })}
  />
);

Progress.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.number,
  max: PropTypes.number,
};

Progress.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  style: undefined,
  color: undefined,
  size: undefined,
  value: undefined,
  max: undefined,
  renderAs: 'progress',
};

export default Progress;
