import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarContainer extends React.PureComponent {
  static displayName = 'Navbar.Container'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.node,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    position: PropTypes.oneOf(['start', 'end']),
  }

  static defaultProps = {
    style: {},
    className: '',
    children: null,
    renderAs: 'div',
    position: 'start',
  }

  render() {
    const {
      className,
      renderAs,
      children,
      position,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames({
          [`navbar-${position}`]: position,
        }, className)}
      >
        {children}
      </Element>
    );
  }
}

