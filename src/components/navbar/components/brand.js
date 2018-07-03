import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarBrand extends React.PureComponent {
  static displayName = 'Navbar.Brand'

  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
    className: '',
    children: null,
  }

  render() {
    const {
      className,
      children,
      ...props
    } = this.props;
    return (
      <div
        {...props}
        className={classnames('navbar-brand', className)}
      >
        {children}
      </div>
    );
  }
}
