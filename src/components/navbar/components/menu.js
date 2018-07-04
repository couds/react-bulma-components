import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';

const NavbarMenu = ({
  className,
  children,
  ...props
}) => (
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

NavbarMenu.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarMenu.defaultProps = {
  style: {},
  className: '',
  children: null,
};

export default NavbarMenu;
