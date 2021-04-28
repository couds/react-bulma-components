import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Progress = ({ className, value, max, color, size, ...props }) => {
  return (
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
};

Progress.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  value: PropTypes.number,
  max: PropTypes.number,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Progress.defaultProps = {
  renderAs: 'progress',
};

export default Progress;
