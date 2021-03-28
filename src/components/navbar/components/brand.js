import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarBrand = ({ className, children, ...props }) => (
  <Element {...props} className={classnames('navbar-brand', className)}>
    {children}
  </Element>
);

NavbarBrand.propTypes = {
  ...Element.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarBrand.defaultProps = {
  ...Element.defaultProps,
  style: undefined,
  className: undefined,
  children: null,
};

export default NavbarBrand;
