import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const roles = [null].concat(Object.keys(CONSTANTS.ROLES).map(key => CONSTANTS.ROLES[key]));

const Progress = ({
  className,
  style,
  value,
  max,
  type,
  size,
}) => (
  <progress
    style={style}
    value={value}
    max={max}
    className={classnames('progress', className, {
      [`is-${type}`]: type,
      [`is-${size}`]: size,
    })}
  />
  );

Progress.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(roles),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

Progress.defaultProps = {
  className: '',
  style: {},
  type: null,
  size: null,
};

export default Progress;
