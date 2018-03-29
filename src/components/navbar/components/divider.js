import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavbarDivider extends React.PureComponent {
  static displayName = 'Navbar.Divider'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
  }

  static defaultProps = {
    style: {},
    className: '',
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classnames('navbar-divider', className)}
      />
    );
  }
}

