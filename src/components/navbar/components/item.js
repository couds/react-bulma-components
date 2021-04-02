import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

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
  ...Element.propTypes,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  dropdownUp: PropTypes.bool,
  hoverable: PropTypes.bool,
  arrowless: PropTypes.bool,
};

NavbarItem.defaultProps = {
  renderAs: 'a',
};

export default NavbarItem;
