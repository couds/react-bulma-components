import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const NavbarDropdown = ({
  className,
  renderAs,
  boxed,
  right,
  children,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('navbar-dropdown', modifiers.classnames(allProps), className, {
        'is-boxed': boxed,
        'is-right': right,
      })}
    >
      {children}
    </Element>
  );
};

NavbarDropdown.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  boxed: PropTypes.bool,
  right: PropTypes.bool,
};

NavbarDropdown.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
  boxed: false,
  right: false,
};

export default NavbarDropdown;
