import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';
import modifiers from '../../../modifiers';

const NavbarMenu = ({
  className,
  children,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <ShowContext.Consumer>
      {
      active => (
        <div
          {...props}
          className={classnames('navbar-menu', modifiers.classnames(allProps), className, {
            'is-active': active,
          })}
        >
          {children}
        </div>
      )
    }
    </ShowContext.Consumer>
  );
};

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
