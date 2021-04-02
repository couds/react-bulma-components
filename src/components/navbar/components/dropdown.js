import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarDropdown = ({ className, boxed, right, children, ...props }) => (
  <Element
    {...props}
    className={classnames('navbar-dropdown', className, {
      'is-boxed': boxed,
      'is-right': right,
    })}
  >
    {children}
  </Element>
);

NavbarDropdown.propTypes = {
  ...Element.propTypes,
  boxed: PropTypes.bool,
  right: PropTypes.bool,
};

NavbarDropdown.defaultProps = {
  renderAs: 'span',
};

export default NavbarDropdown;
