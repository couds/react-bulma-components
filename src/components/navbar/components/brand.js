import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarBrand = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('navbar-brand', className)}
  >
    {children}
  </Element>
));

NavbarBrand.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
};

export default NavbarBrand;
