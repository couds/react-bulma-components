import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaItem = ({
  children,
  className,
  renderAs,
  position,
  ...props
}) => {
  const Element = renderAs;
  const p = position === 'center' ? 'content' : position;
  return (
    <Element
      {...props}
      className={classnames(className, {
        [`media-${p}`]: p,
      })}
    >
      {children}
    </Element>
  );
};

MediaItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
