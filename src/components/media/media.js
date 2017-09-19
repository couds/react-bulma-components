import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MediaItem from './media-item';
import MediaContent from './media-content';

const Media = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('media', className, {
      })}
    >
      {children}
    </Element>
  );
};

Media.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

Media.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'article',
};

Media.Item = MediaItem;
Media.Content = MediaContent;

export default Media;
