import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import canUseDOM from '../../services/can-use-dom';
import Element from '../element';
import Brand from './components/brand';
import Burger from './components/burger';
import Container from './components/container';
import Divider from './components/divider';
import Dropdown from './components/dropdown';
import Item from './components/item';
import Link from './components/link';
import Menu from './components/menu';
import { ShowContext } from './context';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

let htmlClass = '';

export const getHtmlClasses = () => htmlClass;

class Navbar extends React.PureComponent {
  static propTypes = {
    ...modifiers.propTypes,
    children: PropTypes.node,
    innerRef: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    transparent: PropTypes.bool,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    fixed: PropTypes.oneOf(['top', 'bottom']),
    color: PropTypes.oneOf(colors),
    active: PropTypes.bool
  };

  static defaultProps = {
    ...modifiers.defaultProps,
    children: null,
    innerRef: undefined,
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
    if (!canUseDOM) {
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
          className={cn('navbar', modifiers.classnames(props), className, {
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
const NavbarRef = React.forwardRef((props, ref) => <Navbar innerRef={ref} {...props} />);

NavbarRef.Brand = Brand;
NavbarRef.Burger = Burger;
NavbarRef.Menu = Menu;
NavbarRef.Item = Item;
NavbarRef.Dropdown = Dropdown;
NavbarRef.Link = Link;
NavbarRef.Divider = Divider;
NavbarRef.Container = Container;

export default NavbarRef;
