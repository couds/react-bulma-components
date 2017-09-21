import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Content = ({
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
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  renderAs: PropTypes.string,
};

Content.defaultProps = {
  children: null,
  className: '',
  style: {},
  size: null,
  renderAs: 'div',
};

export default Content;
