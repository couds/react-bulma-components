import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// eslint-disable-next-line
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
    style: PropTypes.object,
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

  state = {
    showMobileMenu: false,
  }

  componentDidMount() {
    const html = window.document.querySelector('html');
    let classname = (html.getAttribute('class') || '').replace(/has-navbar-fixed-(top|bottom)/, '');
    if (this.props.fixed) {
      classname = `${classname} has-navbar-fixed-${this.props.fixed}`;
    }
    html.setAttribute('class', classname);
  }

  componentWillReceiveProps(nextProps) {
    if (canUseDOM && nextProps.fixed !== this.props.fixed) {
      const html = window.document.querySelector('html');
      let classname = (html.getAttribute('class') || '').replace(/has-navbar-fixed-(top|bottom)/, '');
      if (nextProps.fixed) {
        classname = `${classname} has-navbar-fixed-${nextProps.fixed}`;
      }
      html.setAttribute('class', classname);
    }
  }

  toggleMenu = () => {
    this.setState(({ showMobileMenu }) => ({ showMobileMenu: !showMobileMenu }));
  }

  render() {
    const {
      children,
      className,
      style,
      renderAs,
      fixed,
      transparent,
      color,
    } = this.props;
    const Element = renderAs;

    return (
      <Element
        role="navigation"
        style={style}
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

