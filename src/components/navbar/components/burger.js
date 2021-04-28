import React from 'react';
import classnames from 'classnames';

import { ShowContext } from '../context';

import Element from '../../element';

const NavbarBurger = ({ style, className, ...props }) => {
  return (
    <ShowContext.Consumer>
      {(active) => {
        return (
          <Element
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
          </Element>
        );
      }}
    </ShowContext.Consumer>
  );
};

NavbarBurger.propTypes = {};

NavbarBurger.defaultProps = {};

export default NavbarBurger;
