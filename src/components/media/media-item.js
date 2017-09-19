import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaItem = ({
  children,
  className,
  style,
  renderAs,
  mediaRole,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, {
        [`media-${mediaRole}`]: mediaRole,
      })}
    >
      {children}
    </Element>
  );
};

MediaItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  mediaRole: PropTypes.oneOf(['content', 'right', 'left']),
};

MediaItem.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  mediaRole: 'content',
};

export default MediaItem;
