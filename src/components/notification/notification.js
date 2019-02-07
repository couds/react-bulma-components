import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

export const Notification = React.forwardRef(({ children, className, color, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn(
      'notification',
      {
        [`is-${color}`]: color
      },
      className
    )}
  >
    {children}
  </Element>
));

Notification.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOf(colors)
};

Notification.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  color: null
};
