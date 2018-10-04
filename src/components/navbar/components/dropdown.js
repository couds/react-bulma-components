import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarDropdown = ({
  className,
  boxed,
  right,
  children,
  ...props
}) => (
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
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  boxed: PropTypes.bool,
  right: PropTypes.bool,
};

NavbarDropdown.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
  boxed: false,
  right: false,
};

export default NavbarDropdown;
