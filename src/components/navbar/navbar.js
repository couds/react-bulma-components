import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { NavbarBrand } from './components/brand';
import { NavbarBurger } from './components/burger';
import { NavbarContainer } from './components/container';
import { NavbarDivider } from './components/divider';
import { NavbarDropdown } from './components/dropdown';
import { NavbarItem } from './components/item';
import { NavbarLink } from './components/link';
import { NavbarMenu } from './components/menu';
import { ShowContext } from './context';

const colors = Object.values(CONSTANTS.COLORS);

let htmlClass = '';

export const getHtmlClasses = () => htmlClass;

export const Navbar = React.forwardRef(({ children, className, fixed, transparent, color, active, ...props }, ref) => {
  useEffect(() => {
    if (!CONSTANTS.IS_CLIENT) {
      return null;
    }

    const html = window.document.querySelector('html');
    html.classList.remove('has-navbar-fixed-top');
    html.classList.remove('has-navbar-fixed-bottom');

    if (fixed) {
      htmlClass = `has-navbar-fixed-${fixed}`;
      html.classList.add(`has-navbar-fixed-${fixed}`);
    }

    return () => {
      window.document.querySelector('html').classList.remove(`has-navbar-fixed-${fixed}`);
    };
  });

  return (
    <ShowContext.Provider value={active}>
      <Element
        {...props}
        ref={ref}
        role="navigation"
        className={cn('navbar', modifiers.getClassName(props), className, {
          'is-transparent': transparent,
          [`is-fixed-${fixed}`]: fixed,
          [`is-${color}`]: color
        })}
      >
        {children}
      </Element>
    </ShowContext.Provider>
  );
});

Navbar.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  transparent: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fixed: PropTypes.oneOf([null, 'top', 'bottom']),
  color: PropTypes.oneOf(colors),
  active: PropTypes.bool
};

Navbar.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'nav',
  transparent: false,
  active: false,
  fixed: null,
  color: null
};

Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Container = NavbarContainer;
Navbar.Divider = NavbarDivider;
Navbar.Dropdown = NavbarDropdown;
Navbar.Item = NavbarItem;
Navbar.Link = NavbarLink;
Navbar.Menu = NavbarMenu;
