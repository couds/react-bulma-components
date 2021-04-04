import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';
import useFieldContext from './context';

const FieldLabel = ({ className, size, ...props }) => {
  const context = useFieldContext();
  return (
    <Element
      {...props}
      className={classnames('field-label', className, {
        [`is-${size}`]: size || context.size,
      })}
    />
  );
};

FieldLabel.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {};

export default FieldLabel;
