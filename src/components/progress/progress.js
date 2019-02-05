import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Progress = React.forwardRef(({ className, value, max, color, size, ...props }, ref) => (
  <Element
    ref={ref}
    renderAs="progress"
    {...props}
    value={value}
    max={max}
    className={cn('progress', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  />
));

Progress.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

Progress.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  color: null,
  size: null
};

export default Progress;
