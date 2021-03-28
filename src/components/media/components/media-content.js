import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const MediaContent = ({ children, className, ...props }) => (
  <Element {...props} className={classnames(className, 'content')}>
    {children}
  </Element>
);

MediaContent.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
};

MediaContent.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default MediaContent;
