import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({
  style,
  className,
  renderAs,
  children,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('navbar-link', className)}
      {...props}
    >
      {children}
    </Element>
  );
};

Link.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Link.defaultProps = {
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
};

export default Link;
