import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Burger from './burger';

export default class NavbarBrand extends React.PureComponent {
  static displayName = 'Navbar.Brand'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    toggleMenu: PropTypes.func,
  }

  static defaultProps = {
    style: {},
    className: '',
    children: null,
    active: false,
    toggleMenu: () => {},
  }

  render() {
    const {
      className,
      children,
      active,
      toggleMenu,
      ...props
    } = this.props;
    return (
      <div
        {...props}
        className={classnames('navbar-brand', className)}
      >
        {React.Children.map(children, (child) => {
          if ([Burger].includes(child.type)) {
            return React.cloneElement(child, { active, toggleMenu });
          }
          return child;
        })}
      </div>
    );
  }
}
