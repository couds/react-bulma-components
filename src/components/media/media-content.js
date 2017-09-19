import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaContent = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, 'content')}
    >
      {children}
    </Element>
  );
};

MediaContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

MediaContent.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default MediaContent;
