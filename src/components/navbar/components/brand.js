import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const NavbarBrand = ({
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={classnames('navbar-brand', className)}
  >
    {children}
  </div>
);

NavbarBrand.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarBrand.defaultProps = {
  style: {},
  className: '',
  children: null,
};

export default NavbarBrand;
