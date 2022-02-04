import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NavbarDropdown from './dropdown';

import Element from '../../element';

const NavbarItem = ({
  className,
  active,
  children,
  hoverable,
  renderAs,
  arrowless,
  ...props
}) => {
  let as = renderAs;

  const dropdown = React.Children.toArray(children).find((child) => {
    return child.type === NavbarDropdown;
  });

  if (dropdown && renderAs === 'a') {
    as = 'div';
  }
  return (
    <Element
      {...props}
      renderAs={as}
      className={classnames('navbar-item', className, {
        'is-active': active,
        'has-dropdown': dropdown,
        'is-hoverable': hoverable,
        'has-dropdown-up': dropdown && dropdown.props?.up,
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

NavbarItem.propTypes = {
  /**
   * If the item has a dropdown, control if the dropdown is displayed
   */
  active: PropTypes.bool,
  /**
   * Control if the dropdown should be displayed on mouse over
   * This prop will be ignored if `active=true`
   */
  hoverable: PropTypes.bool,
  arrowless: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

NavbarItem.defaultProps = {
  renderAs: 'a',
};

export default NavbarItem;
