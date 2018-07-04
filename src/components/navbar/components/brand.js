import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const NavbarBrand = ({
  className,
  children,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <div
      {...props}
      className={classnames('navbar-brand', modifiers.classnames(allProps), className)}
    >
      {children}
    </div>
  );
};

NavbarBrand.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
};

export default NavbarBrand;
