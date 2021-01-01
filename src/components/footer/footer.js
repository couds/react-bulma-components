import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Footer = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('footer', className)}>
    {children}
  </Element>
);

Footer.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  /**
   * Additional CSS classes to pass to `<Footer />`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  /**
   * A custom component that <Footer /> should be rendered as.
   */
  renderAs: renderAsShape,
};

Footer.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default Footer;
