import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const breakpoints = [null].concat(Object.values(CONSTANTS.BREAKPOINTS));

export const Container = React.forwardRef(({ children, fluid, breakpoint, className, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('container', className, {
      'is-fluid': fluid,
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
));

Container.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false,
  children: null,
  breakpoint: null,
  className: '',
  style: {},
  renderAs: 'div'
};
