import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarBurger = ({ style, className, ...props }) => (
  <ShowContext.Consumer>
    {active => (
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
    )}
  </ShowContext.Consumer>
);

NavbarBurger.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NavbarBurger.defaultProps = {
  ...modifiers.defaultProps,
  style: undefined,
  className: undefined,
  onClick: () => {},
};

export default NavbarBurger;
