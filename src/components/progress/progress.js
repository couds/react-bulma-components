import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

const Progress = ({ className, value, max, color, size, ...props }) => (
  <Element
    renderAs="progress"
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
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.number,
  max: PropTypes.number,
};

Progress.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  color: undefined,
  size: undefined,
  value: undefined,
  max: undefined,
};

export default Progress;
