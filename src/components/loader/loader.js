import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Loader = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('loader', className)}>
    {children}
  </Element>
));

Loader.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Loader.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div'
};
