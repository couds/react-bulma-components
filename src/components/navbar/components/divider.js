import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarDivider = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('navbar-divider', className)} />
));

NavbarDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string
};

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: ''
};
