import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const MediaContent = ({ children, className, ...props }) => (
  <Element {...props} className={classnames(className, 'content')}>
    {children}
  </Element>
);

MediaContent.propTypes = {
  ...Element.propTypes,
};

export default MediaContent;
