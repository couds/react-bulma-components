import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';

export default class NavbarBurger extends React.PureComponent {
  static displayName = 'Navbar.Burger'

  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    style: {},
    className: '',
    onClick: () => {},
  }

  onClick = (evt) => {
    const { onClick } = this.props;
    onClick(evt);
  }

  render() {
    const {
      style,
      className,
      onClick,
      ...props
    } = this.props;
    return (
      <ShowContext.Consumer>
        {
          active => (
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
          )
        }
      </ShowContext.Consumer>
    );
  }
}
