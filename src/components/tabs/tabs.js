import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { Tab } from './components/tab';

export const Tabs = React.forwardRef(({ children, className, align, size, type, fullwidth, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('tabs', className, {
      [`is-${align}`]: align,
      [`is-${size}`]: size,
      // Bulma 0.6.2 is not releaset ATM
      'is-toggle': type === 'toggle-rounded',
      [`is-${type}`]: type,
      'is-fullwidth': fullwidth
    })}
  >
    <ul>{children}</ul>
  </Element>
));

Tabs.Tab = Tab;

Tabs.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.oneOf(['centered', 'right']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  /** This is called style on Bulma documentation */
  type: PropTypes.oneOf(['toggle', 'boxed', 'toggle-rounded']),
  fullwidth: PropTypes.bool
};

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: null,
  size: null,
  type: null,
  fullwidth: false
};
