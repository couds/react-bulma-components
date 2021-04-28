import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MediaItem from './components/media-item';

import Element from '../element';

const Media = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('media', className, {})}>
      {children}
    </Element>
  );
};

Media.Item = MediaItem;

Media.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Media.defaultProps = {
  renderAs: 'article',
};

export default Media;
