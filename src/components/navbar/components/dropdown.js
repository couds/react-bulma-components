import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarDropdown = ({ className, boxed, right, children, ...props }) => {
  return (
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
};

NavbarDropdown.propTypes = {
  boxed: PropTypes.bool,
  /**
   * If your parent `Navbar.Container` is on the right side, you can align the dropdown to start from the right setting this to true.
   */
  right: PropTypes.bool,
  /**
   * Open the dropdown upward instead of downward (default behaviour)
   */
  up: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

NavbarDropdown.defaultProps = {
  renderAs: 'div',
};

export default NavbarDropdown;
