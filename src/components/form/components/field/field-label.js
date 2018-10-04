import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const FieldLabel = ({
  children,
  className,
  size,
  ...props
}) => (
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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  size: null,
};

export default FieldLabel;
