import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const NavbarDivider = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('navbar-divider', className)}
  />
));


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
