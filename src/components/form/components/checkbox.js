import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

import './checkbox.sass';

const colors = Object.values(CONSTANTS.COLORS);

export const Checkbox = React.forwardRef(
  ({ className, style, disabled, value, children, checked, color, size, indeterminate, name, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <label
        disabled={disabled}
        className={cn('b-checkbox checkbox', modifiers.getClassName(allProps), className)}
        style={style}
      >
        <input
          {...props}
          ref={ref}
          name={name}
          type="checkbox"
          value={value}
          disabled={disabled}
          checked={checked}
          indeterminate={indeterminate}
        />
        <span
          className={cn('check', {
            [`is-${color}`]: color,
            [`is-${size}`]: size
          })}
        />
        <span className="control-label">{children}</span>
      </label>
    );
  }
);

Checkbox.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  name: PropTypes.string
};

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  color: null,
  size: null,
  disabled: false,
  checked: false,
  indeterminate: false,
  name: null
};
