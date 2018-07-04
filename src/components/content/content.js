import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Content = ({
  children,
  className,
  renderAs,
  size,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('content', className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Content.defaultProps = {
  children: null,
  className: '',
  style: {},
  size: null,
  renderAs: 'div',
};

export default Content;
