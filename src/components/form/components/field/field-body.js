import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FieldBody = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;

  return (
    <Element
      style={style}
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
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

FieldBody.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default FieldBody;
