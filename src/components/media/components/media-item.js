import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const MediaItem = ({ children, className, position, ...props }) => {
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
  ...Element.propTypes,
  position: PropTypes.oneOf(['center', 'right', 'left']),
};

MediaItem.defaultProps = {
  position: 'center',
};

export default MediaItem;
