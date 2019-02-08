import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Textarea = React.forwardRef(
  ({ className, size, color, readOnly, disabled, placeholder, rows, value, name, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <textarea
        name={name}
        {...props}
        ref={ref}
        value={value}
        rows={rows}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        className={cn('textarea', modifiers.classnames(allProps), className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color
        })}
      />
    );
  }
);

Textarea.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  size: null,
  color: null,
  readOnly: false,
  disabled: false,
  placeholder: '',
  rows: 4,
  value: '',
  name: ''
};
