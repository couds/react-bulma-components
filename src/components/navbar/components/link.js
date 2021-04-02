import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarLink = ({ className, children, arrowless, ...props }) => (
  <Element
    {...props}
    className={classnames('navbar-link', className, {
      'is-arrowless': arrowless,
    })}
  >
    {children}
  </Element>
);

NavbarLink.propTypes = {
  ...Element.propTypes,
  arrowless: PropTypes.bool,
};

NavbarLink.defaultProps = {
  renderAs: 'span',
};

export default NavbarLink;
