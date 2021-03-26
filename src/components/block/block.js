import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../element';

const Content = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('block', className)}>
    {children}
  </Element>
);

Content.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  /**
   * Additional CSS classes to pass to `<Content />`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
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
