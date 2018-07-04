import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const NavbarDivider = ({
  className,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <div
      {...props}
      className={classnames('navbar-divider', modifiers.classnames(allProps), className)}
    />
  );
};


NavbarDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
};

export default NavbarDivider;
