import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const Tab = React.forwardRef(({ children, className, style, active, ...props }, ref) => (
  <li
    ref={ref}
    style={style}
    className={cn(className, {
      'is-active': active
    })}
  >
    <Element {...props}>{children}</Element>
  </li>
));

Tab.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  active: PropTypes.bool
};

Tab.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  active: false
};
