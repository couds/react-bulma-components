import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';

export const Radio = React.forwardRef(
  ({ className, style, disabled, checked, value, name, children, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <label disabled={disabled} className={cn('radio', modifiers.classnames(allProps), className)} style={style}>
        <input {...props} ref={ref} name={name} checked={checked} type="radio" value={value} disabled={disabled} />
        {children}
      </label>
    );
  }
);

Radio.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.string
};

Radio.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false
};
