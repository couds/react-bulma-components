import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import Icon from '../../icon';
import useFieldContext from './field/context';
import Button from '../../button';

const isIcon = (child) => {
  return (
    child.type === Icon &&
    (child.props.align === 'left' || child.props.align === 'right')
  );
};

const Control = ({ children, className, fullwidth, loading, ...props }) => {
  const context = useFieldContext();

  const updatedChildren = React.Children.map(children, (child) => {
    if (!isIcon(child) && child.type !== Button) {
      return child;
    }
    return React.cloneElement(child, {
      size: child.props.size || context.size,
    });
  });

  const icons = React.Children.toArray(updatedChildren)
    .filter(isIcon)
    .reduce(
      (acc, icon) => ({
        iconLeft: acc.iconLeft || icon.props.align === 'left',
        iconRight: acc.iconRight || icon.props.align === 'right',
      }),
      { iconLeft: false, iconRight: false },
    );
  return (
    <Element
      {...props}
      className={classnames('control', className, {
        'is-expanded': fullwidth,
        'has-icons-left': icons.iconLeft,
        'has-icons-right': icons.iconRight,
        'is-loading': loading,
      })}
    >
      {updatedChildren}
    </Element>
  );
};

Control.propTypes = {
  loading: PropTypes.bool,
  /**
   * When true and the `Field` container has the `kind` props set the Control
   * will use all available space instead of adjusting to the element inside
   */
  fullwidth: PropTypes.bool,
};

Control.defaultProps = {};

export default Control;
