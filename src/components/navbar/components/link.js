import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarLink extends React.PureComponent {
  static displayName = 'Navbar.Link'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.node,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    style: {},
    className: '',
    children: null,
    renderAs: 'span',
  }
  render() {
    const {
      className,
      renderAs,
      children,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('navbar-link', className)}
      >
        {children}
      </Element>
    );
  }
}

