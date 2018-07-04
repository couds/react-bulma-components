import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Label = ({
  children,
  className,
  size,
  ...props
}) => (
  <label
    {...props}
    className={classnames('label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  children: null,
  className: '',
  style: {},
  size: null,
  htmlFor: null,
};

export default Label;
