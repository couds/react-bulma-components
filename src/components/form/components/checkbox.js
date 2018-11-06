import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const Checkbox = ({
  className,
  style,
  disabled,
  value,
  children,
  checked,
  name,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      disabled={disabled}
      className={classnames('checkbox', modifiers.classnames(allProps), className)}
      style={style}
    >
      <input
        {...props}
        name={name}
        type="checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {children}
    </label>
  );
};

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
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false,
  name: null,
};

export default Checkbox;
