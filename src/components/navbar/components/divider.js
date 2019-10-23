import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarDivider = ({ className, ...props }) => (
  <Element {...props} className={classnames('navbar-divider', className)} />
);

NavbarDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps,
  style: undefined,
  className: undefined,
};

export default NavbarDivider;
