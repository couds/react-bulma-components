import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarBurger extends React.PureComponent {
  static displayName = 'Navbar.Burger'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    toggleMenu: PropTypes.func,
  }

  static defaultProps = {
    style: {},
    className: '',
    active: false,
    onClick: () => {},
    toggleMenu: () => {},
  }

  onClick = (evt) => {
    this.props.onClick(evt);
    this.props.toggleMenu();
  }

  render() {
    const {
      style,
      className,
      active,
      onClick,
      toggleMenu,
      ...props
    } = this.props;
    return (
      <div
        onClick={this.onClick}
        role="button"
        tabIndex="0"
        style={{ outline: 'none', ...style }}
        className={classnames('navbar-burger', className, {
          'is-active': active,
        })}
        {...props}
      >
        <span />
        <span />
        <span />
      </div>
    );
  }
}
