import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Content = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('block', className)}>
    {children}
  </Element>
);

Content.propTypes = {
  ...modifiers.propTypes,
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
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  size: undefined,
  renderAs: 'div',
};

export default Content;
