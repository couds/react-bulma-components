import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Content = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('content', className)}
    >
      {children}
    </Element>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

Content.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Content;
