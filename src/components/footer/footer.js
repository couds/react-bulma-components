import React from 'react';
import classnames from 'classnames';

import Element from '../element';

const Footer = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('footer', className)}>
    {children}
  </Element>
);

Footer.propTypes = {
  ...Element.propTypes,
};

Footer.defaultProps = {
  ...Element.defaultProps,
};

export default Footer;
