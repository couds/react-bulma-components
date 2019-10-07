import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const NavbarItem = ({
  className,
  active,
  children,
  dropdown,
  dropdownUp,
  hoverable,
  renderAs,
  arrowless,
  ...props
}) => {
  let as = renderAs;
  if (dropdown && renderAs === 'a') {
    as = 'span';
  }
  return (
    <Element
      {...props}
      renderAs={as}
      className={classnames('navbar-item', className, {
        'is-active': active,
        'has-dropdown': dropdown,
        'is-hoverable': hoverable,
        'has-dropdown-up': dropdownUp,
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

NavbarItem.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  dropdownUp: PropTypes.bool,
  hoverable: PropTypes.bool,
  children: PropTypes.node,
  arrowless: PropTypes.bool,
  renderAs: renderAsShape,
};

NavbarItem.defaultProps = {
  ...modifiers.defaultProps,
  style: undefined,
  className: undefined,
  active: undefined,
  children: null,
  dropdown: undefined,
  hoverable: undefined,
  dropdownUp: undefined,
  arrowless: undefined,
  renderAs: 'a',
};

export default NavbarItem;
