import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const FieldLabel = ({ className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('field-label', className, {
      [`is-${size}`]: size,
    })}
  />
);

FieldLabel.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {};

export default FieldLabel;
