import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Box = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('box', className)}
    >
      {children}
    </Element>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Box.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Box;
