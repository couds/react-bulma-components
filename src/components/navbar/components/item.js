import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarItem = React.forwardRef(
  ({ className, active, children, dropdown, dropdownUp, hoverable, renderAs, ...props }, ref) => {
    let as = renderAs;
    if (dropdown && renderAs === 'a') {
      as = 'span';
    }
    return (
      <Element
        {...props}
        ref={ref}
        renderAs={as}
        className={cn('navbar-item', className, {
          'is-active': active,
          'has-dropdown': dropdown,
          'is-hoverable': hoverable,
          'has-dropdown-up': dropdownUp
        })}
      >
        {children}
      </Element>
    );
  }
);

NavbarItem.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  dropdownUp: PropTypes.bool,
  hoverable: PropTypes.bool,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

NavbarItem.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  active: false,
  children: null,
  dropdown: false,
  hoverable: false,
  dropdownUp: false,
  renderAs: 'a'
};
