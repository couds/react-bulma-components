import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loader = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('loader', className)}
    >
      {children}
    </Element>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

Loader.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Loader;
