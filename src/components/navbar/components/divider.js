import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarDivider = ({ className, ...props }) => (
  <Element {...props} className={classnames('navbar-divider', className)} />
);

NavbarDivider.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

NavbarDivider.defaultProps = {
  renderAs: 'hr',
};

export default NavbarDivider;
