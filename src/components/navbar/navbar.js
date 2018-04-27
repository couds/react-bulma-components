import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import canUseDOM from '../../services/can-use-dom';
import Brand from './components/brand';
import Burger from './components/burger';
import Menu from './components/menu';
import Item from './components/item';
import Dropdown from './components/dropdown';
import Divider from './components/divider';
import Link from './components/link';
import Container from './components/container';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));


export default class Navbar extends React.PureComponent {
  static Brand = Brand
  static Burger = Burger
  static Menu = Menu
  static Item = Item
  static Dropdown = Dropdown
  static Link = Link
  static Divider = Divider
  static Container = Container

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    transparent: PropTypes.bool,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    fixed: PropTypes.oneOf(['top', 'bottom']),
    color: PropTypes.oneOf(colors),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'nav',
    transparent: false,
    fixed: null,
    color: null,
  }

  static getDerivedStateFromProps(nextProps) {
    if (!canUseDOM) {
      return null;
    }
    const html = window.document.querySelector('html');
    html.classList.remove('has-navbar-fixed-top');
    html.classList.remove('has-navbar-fixed-bottom');
    if (nextProps.fixed) {
      html.classList.add(`has-navbar-fixed-${nextProps.fixed}`);
    }
    return null;
  }

  state = {
    showMobileMenu: false,
  }

  componentDidMount() {
    if (this.props.fixed) {
      window.document.querySelector('html').classList.add(`has-navbar-fixed-${this.props.fixed}`);
    }
  }

  // TODO: Remove this on future releases
  componentWillReceiveProps(nextProps) {
    Navbar.getDerivedStateFromProps(nextProps);
  }

  componentWillUnmount() {
    window.document.querySelector('html').classList.remove(`has-navbar-fixed-${this.props.fixed}`);
  }

  toggleMenu = () => {
    this.setState(({ showMobileMenu }) => ({ showMobileMenu: !showMobileMenu }));
  }

  render() {
    const {
      children,
      className,
      renderAs,
      fixed,
      transparent,
      color,
      ...props
    } = this.props;
    const Element = renderAs;

    return (
      <Element
        {...props}
        role="navigation"
        className={classnames('navbar', className, {
          'is-transparent': transparent,
          [`is-fixed-${fixed}`]: fixed,
          [`is-${color}`]: color,
        })}
      >
        {React.Children.map(children, (child) => {
          if ([Brand].includes(child.type)) {
            return React.cloneElement(child, { active: this.state.showMobileMenu, toggleMenu: this.toggleMenu });
          }
          if ([Menu].includes(child.type)) {
            return React.cloneElement(child, { active: this.state.showMobileMenu });
          }
          return child;
        })}
      </Element>
    );
  }
}

