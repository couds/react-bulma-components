import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Section = React.forwardRef(({ children, className, size, ...props }, ref) => (
  <Element
    ref={ref}
    {...props}
    className={cn('section', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
));

Section.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['medium', 'large'])
};

Section.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'section',
  size: null
};
