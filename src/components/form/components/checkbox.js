import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';

export const Checkbox = React.forwardRef(
  ({ className, style, disabled, value, children, checked, name, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <label disabled={disabled} className={cn('checkbox', modifiers.classnames(allProps), className)} style={style}>
        <input {...props} ref={ref} name={name} type="checkbox" value={value} disabled={disabled} checked={checked} />
        {children}
      </label>
    );
  }
);

Checkbox.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string
};

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false,
  name: null
};
