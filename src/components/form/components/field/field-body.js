import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FieldBody = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('field-body', className, {
      })}
    >
      {children}
    </Element>
  );
};

FieldBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

FieldBody.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default FieldBody;
