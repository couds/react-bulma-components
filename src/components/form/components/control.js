import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import Icon from '../../icon';

const Control = ({
  children,
  className,
  fullwidth,
  loading,
  size,
  ...props
}) => {
  const icons = React.Children.toArray(children)
    .filter((child) => child.type === Icon)
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
        [`is-${size}`]: size,
      })}
    >
      {children}
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
