import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Control = ({
  children,
  className,
  fullwidth,
  iconLeft,
  iconRight,
  loading,
  size,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('control', className, {
      'is-expanded': fullwidth,
      'has-icons-left': iconLeft,
      'has-icons-right': iconRight,
      'is-loading': loading,
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Control.propTypes = {
  ...Element.propTypes,
  fullwidth: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Control.defaultProps = {
  ...Element.defaultProps,
  fullwidth: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  loading: undefined,
  size: undefined,
};

export default Control;
