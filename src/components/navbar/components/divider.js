import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const NavbarDivider = ({
  className,
  ...props
}) => (
  <div
    {...props}
    className={classnames('navbar-divider', className)}
  />
);


NavbarDivider.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

NavbarDivider.defaultProps = {
  style: {},
  className: '',
};

export default NavbarDivider;
