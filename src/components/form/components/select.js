import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

import './select.sass';

export const Select = React.forwardRef(
  (
    {
      className,
      style,
      size,
      color,
      loading,
      rounded,
      empty,
      readOnly,
      disabled,
      value,
      multiple,
      children,
      name,
      ...allProps
    },
    ref
  ) => {
    const props = modifiers.clean(allProps);
    return (
      <div
        className={cn('select', modifiers.getClassName(allProps), className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          'is-loading': loading,
          'is-rounded': rounded,
          'is-empty': empty,
          'is-multiple': multiple
        })}
        style={style}
      >
        <select
          {...props}
          ref={ref}
          multiple={multiple}
          value={value}
          aria-readonly={readOnly}
          disabled={disabled}
          name={name}
        >
          {children}
        </select>
      </div>
    );
  }
);

Select.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  rounded: PropTypes.bool,
  empty: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string
};

Select.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  size: null,
  color: null,
  readOnly: false,
  disabled: false,
  multiple: false,
  rounded: false,
  empty: false,
  loading: false,
  name: ''
};
