import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const NavbarLink = ({ className, children, arrowless, ...props }) => (
  <Element
    {...props}
    className={classnames('navbar-link', className, {
      'is-arrowless': arrowless,
    })}
  >
    {children}
  </Element>
);

NavbarLink.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: renderAsShape,
  arrowless: PropTypes.bool,
};

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  style: undefined,
  className: undefined,
  children: null,
  arrowless: undefined,
  renderAs: 'span',
};

export default NavbarLink;
