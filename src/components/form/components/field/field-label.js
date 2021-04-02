import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const FieldLabel = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('field-label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

FieldLabel.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {
  ...Element.defaultProps,
};

export default FieldLabel;
