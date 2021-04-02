import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Brand from './components/brand';
import Burger from './components/burger';
import Menu from './components/menu';
import Item from './components/item';
import Dropdown from './components/dropdown';
import Divider from './components/divider';
import Link from './components/link';
import Container from './components/container';
import CONSTANTS from '../../constants';
import { ShowContext } from './context';
import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

let htmlClass = '';

export const getHtmlClasses = () => htmlClass;

const Navbar = ({
  children,
  className,
  fixed,
  transparent,
  color,
  active,
  ...props
}) => {
  htmlClass = fixed ? `has-navbar-fixed-${fixed}` : '';
  useEffect(() => {
    const html = window.document.querySelector('html');
    if (!html.classList.contains(`has-navbar-fixed-${fixed}`)) {
      html.classList.remove('has-navbar-fixed-top');
      html.classList.remove('has-navbar-fixed-bottom');
    }
    if (fixed) {
      html.classList.add(`has-navbar-fixed-${fixed}`);
    }
    return () =>
      window.document
        .querySelector('html')
        .classList.remove(`has-navbar-fixed-${fixed}`);
  }, [fixed]);
  return (
    <ShowContext.Provider value={active}>
      <Element
        {...props}
        role="navigation"
        className={classnames('navbar', className, {
          'is-transparent': transparent,
          [`is-fixed-${fixed}`]: fixed,
          [`is-${color}`]: color,
        })}
      >
        {children}
      </Element>
    </ShowContext.Provider>
  );
};

Navbar.propTypes = {
  transparent: PropTypes.bool,
  fixed: PropTypes.oneOf(['top', 'bottom']),
  color: PropTypes.oneOf(colors),
  active: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Navbar.defaultProps = {
  renderAs: 'nav',
};

Navbar.Brand = Brand;
Navbar.Burger = Burger;
Navbar.Menu = Menu;
Navbar.Item = Item;
Navbar.Dropdown = Dropdown;
Navbar.Link = Link;
Navbar.Divider = Divider;
Navbar.Container = Container;

export default Navbar;
