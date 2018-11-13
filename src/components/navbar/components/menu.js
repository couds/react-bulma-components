import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarMenu = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <ShowContext.Consumer>
    {
      active => (
        <Element
          {...props}
          ref={ref}
          className={classnames('navbar-menu', className, {
            'is-active': active,
          })}
        >
          {children}
        </Element>
      )
    }
  </ShowContext.Consumer>
));

NavbarMenu.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarMenu.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
};

export default NavbarMenu;
