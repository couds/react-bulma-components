import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const FieldBody = ({
  children,
  className,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('field-body', className, {
    })}
  >
    {children}
  </Element>
);

FieldBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

FieldBody.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default FieldBody;
