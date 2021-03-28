import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarDivider = ({ className, ...props }) => (
  <Element {...props} className={classnames('navbar-divider', className)} />
);

NavbarDivider.propTypes = {
  ...Element.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

NavbarDivider.defaultProps = {
  ...Element.defaultProps,
  style: undefined,
  className: undefined,
};

export default NavbarDivider;
