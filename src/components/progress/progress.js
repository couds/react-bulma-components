import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Progress = ({
  className,
  value,
  max,
  color,
  size,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <progress
      {...props}
      value={value}
      max={max}
      className={classnames('progress', modifiers.classnames(allProps), className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
      })}
    />
  );
};

Progress.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

Progress.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  color: null,
  size: null,
};

export default Progress;
