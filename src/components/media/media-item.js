import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaItem = ({
  children,
  className,
  style,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  let { position } = props;
  if (position === 'center') {
    position = 'content';
  }
  return (
    <Element
      style={style}
      className={classnames(className, {
        [`media-${position}`]: position,
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
  position: PropTypes.oneOf(['center', 'right', 'left']),
};

MediaItem.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  position: 'center',
};

export default MediaItem;
