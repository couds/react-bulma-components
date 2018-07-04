import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const MediaItem = ({
  children,
  className,
  renderAs,
  position,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  const p = position === 'center' ? 'content' : position;
  return (
    <Element
      {...props}
      className={classnames(className, modifiers.classnames(allProps), {
        [`media-${p}`]: p,
      })}
    >
      {children}
    </Element>
  );
};

MediaItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  position: PropTypes.oneOf(['center', 'right', 'left']),
};

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  position: 'center',
};

export default MediaItem;
