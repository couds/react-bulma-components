import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';
import modifiers from '../../modifiers';

const Tabs = ({
  children,
  className,
  renderAs,
  align,
  size,
  type,
  fullwidth,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('tabs', className, modifiers.classnames(allProps), {
        [`is-${align}`]: align,
        [`is-${size}`]: size,
        // Bulma 0.6.2 is not releaset ATM
        'is-toggle': type === 'toggle-rounded',
        [`is-${type}`]: type,
        'is-fullwidth': fullwidth,
      })}
    >
      <ul>
        {children}
      </ul>
    </Element>
  );
};

Tabs.Tab = Tab;

Tabs.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  align: PropTypes.oneOf(['centered', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** This is called style on Bulma documentation */
  type: PropTypes.oneOf(['toggle', 'boxed', 'toggle-rounded']),
  fullwidth: PropTypes.bool,
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
  fullwidth: false,
};

export default Tabs;
