import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarMenu extends React.PureComponent {
  static displayName = 'Navbar.Menu'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
    className: '',
    active: false,
    children: null,
  }

  render() {
    const {
      className,
      active,
      children,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classnames('navbar-menu', className, {
          'is-active': active,
        })}
      >
        {children}
      </div>
    );
  }
}

