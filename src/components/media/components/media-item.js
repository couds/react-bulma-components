import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  position: PropTypes.oneOf(['center', 'right', 'left']),
};

MediaItem.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  position: 'center',
};

export default MediaItem;
