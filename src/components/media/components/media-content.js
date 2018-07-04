import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaContent = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames(className, 'content')}
    >
      {children}
    </Element>
  );
};

MediaContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

MediaContent.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default MediaContent;
