import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { MediaContent } from './components/media-content';
import { MediaItem } from './components/media-item';

export const Media = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('media', className, {})}>
    {children}
  </Element>
));
Media.Item = MediaItem;

Media.Content = MediaContent;

Media.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Media.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'article'
};

export default Media;
