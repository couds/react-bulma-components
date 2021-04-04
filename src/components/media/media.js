import React from 'react';
import classnames from 'classnames';

import MediaItem from './components/media-item';

import Element from '../element';

const Media = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('media', className, {})}>
    {children}
  </Element>
);

Media.Item = MediaItem;

Media.propTypes = {};

Media.defaultProps = {
  renderAs: 'article',
};

export default Media;
