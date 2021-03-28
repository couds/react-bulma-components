import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Content = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('content', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Content.propTypes = {
  ...Element.propTypes,
  /**
   * Adjust the size of the content.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
  /**
   * Additional CSS classes to pass to `<Content />`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  /**
   * Specify component/HTML element that `<Content />` should be rendered as.
   */
  renderAs: renderAsShape,
};

Content.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  size: undefined,
  renderAs: 'div',
};

export default Content;
