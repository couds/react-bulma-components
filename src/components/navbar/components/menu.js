import React from 'react';
import classnames from 'classnames';

import { ShowContext } from '../context';

import Element from '../../element';

const NavbarMenu = ({ className, children, ...props }) => {
  return (
    <ShowContext.Consumer>
      {(active) => {
        return (
          <Element
            {...props}
            className={classnames('navbar-menu', className, {
              'is-active': active,
            })}
          >
            {children}
          </Element>
        );
      }}
    </ShowContext.Consumer>
  );
};

NavbarMenu.propTypes = {};

NavbarMenu.defaultProps = {};

export default NavbarMenu;
