import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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

class NavbarEl extends React.PureComponent {
  static propTypes = {
    ...modifiers.propTypes,
    children: PropTypes.node,
    innerRef: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    transparent: PropTypes.bool,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    fixed: PropTypes.oneOf([null, 'top', 'bottom']),
    color: PropTypes.oneOf(colors),
    active: PropTypes.bool
  };

  static defaultProps = {
    ...modifiers.defaultProps,
    children: null,
    innerRef: null,
    className: '',
    style: {},
    renderAs: 'nav',
    transparent: false,
    active: false,
    fixed: null,
    color: null
  };

  state = {};

  componentWillUnmount() {
    const { fixed } = this.props;
    window.document.querySelector('html').classList.remove(`has-navbar-fixed-${fixed}`);
  }

  static getDerivedStateFromProps(nextProps) {
    if (!CONSTANTS.IS_CLIENT) {
      return null;
    }
    const html = window.document.querySelector('html');
    html.classList.remove('has-navbar-fixed-top');
    html.classList.remove('has-navbar-fixed-bottom');
    if (nextProps.fixed) {
      htmlClass = `has-navbar-fixed-${nextProps.fixed}`;
      html.classList.add(`has-navbar-fixed-${nextProps.fixed}`);
    }
    return null;
  }

  render() {
    const { innerRef, children, className, fixed, transparent, color, active, ...props } = this.props;

    return (
      <ShowContext.Provider value={active}>
        <Element
          {...props}
          ref={innerRef}
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
  }
}

// const NavbarRef = React.forwardRef((props, ref) => <Navbar innerRef={ref} {...props} />);
export const Navbar = React.forwardRef((props, ref) => <NavbarEl innerRef={ref} {...props} />);

Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Menu = NavbarMenu;
Navbar.Item = NavbarItem;
Navbar.Dropdown = NavbarDropdown;
Navbar.Link = NavbarLink;
Navbar.Divider = NavbarDivider;
Navbar.Container = NavbarContainer;
