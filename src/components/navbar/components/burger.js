import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ShowContext } from '../context';
import modifiers from '../../../modifiers';

const NavbarBurger = ({
  style,
  className,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <ShowContext.Consumer>
      {
      active => (
        <div
          role="button"
          tabIndex="0"
          style={{ outline: 'none', ...style }}
          className={classnames('navbar-burger', modifiers.classnames(allProps), className, {
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
};

NavbarBurger.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NavbarBurger.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  onClick: () => {},
};

export default NavbarBurger;
