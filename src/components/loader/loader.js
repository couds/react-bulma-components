import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loader = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('loader', className)}
    >
      {children}
    </Element>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Loader.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Loader;
