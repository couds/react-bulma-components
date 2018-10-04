import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarLink = ({
  className,
  children,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('navbar-link', className)}
  >
    {children}
  </Element>
);


NavbarLink.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
};

export default NavbarLink;
