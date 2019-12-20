import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Tabs = ({
  children,
  className,
  align,
  size,
  type,
  fullwidth,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('tabs', className, {
      [`is-${align}`]: align,
      [`is-${size}`]: size,
      // Bulma 0.6.2 is not releaset ATM
      'is-toggle': type === 'toggle-rounded',
      [`is-${type}`]: type,
      'is-fullwidth': fullwidth,
    })}
  >
    <ul>{children}</ul>
  </Element>
);

Tabs.Tab = Tab;

Tabs.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  align: PropTypes.oneOf(['centered', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** This is called style on Bulma documentation */
  type: PropTypes.oneOf(['toggle', 'boxed', 'toggle-rounded']),
  fullwidth: PropTypes.bool,
};

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  align: undefined,
  size: undefined,
  type: undefined,
  fullwidth: false,
};

export default Tabs;
