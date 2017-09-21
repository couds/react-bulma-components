import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FieldLabel = ({
  children,
  className,
  style,
  renderAs,
  size,
}) => {
  const Element = renderAs;

  return (
    <Element
      style={style}
      className={classnames('field-label', className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

FieldLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  size: null,
};

export default FieldLabel;
