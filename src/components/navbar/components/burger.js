import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';

const NavbarBurger = ({
  style,
  className,
  ...props
}) => (
  <ShowContext.Consumer>
    {
      active => (
        <div
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

NavbarBurger.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NavbarBurger.defaultProps = {
  style: {},
  className: '',
  onClick: () => {},
};

export default NavbarBurger;
