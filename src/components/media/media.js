import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MediaItem from './components/media-item';
import MediaContent from './components/media-content';

const Media = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('media', className, {
      })}
    >
      {children}
    </Element>
  );
};
Media.Item = MediaItem;

Media.Content = MediaContent;

Media.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Media.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'article',
};

export default Media;
