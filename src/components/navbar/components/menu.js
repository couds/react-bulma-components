import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';

export default class NavbarMenu extends React.PureComponent {
  static displayName = 'Navbar.Menu'

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
      <ShowContext.Consumer>
        {
          active => (
            <div
              {...props}
              className={classnames('navbar-menu', className, {
                'is-active': active,
              })}
            >
              {children}
            </div>
          )
        }
      </ShowContext.Consumer>
    );
  }
}
