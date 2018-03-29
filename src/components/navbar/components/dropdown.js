import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarDropdown extends React.PureComponent {
  static displayName = 'Navbar.Dropdown'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.node,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    boxed: PropTypes.bool,
    right: PropTypes.bool,
  }

  static defaultProps = {
    style: {},
    className: '',
    children: null,
    renderAs: 'span',
    boxed: false,
    right: false,
  }
  render() {
    const {
      className,
      renderAs,
      boxed,
      right,
      children,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('navbar-dropdown', className, {
            'is-boxed': boxed,
            'is-right': right,
          })}
      >
        {children}
      </Element>
    );
  }
}

