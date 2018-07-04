import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const Radio = ({
  className,
  style,
  disabled,
  checked,
  value,
  name,
  children,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      disabled={disabled}
      className={classnames('radio', modifiers.classnames(allProps), className)}
      style={style}
    >
      <input
        {...props}
        name={name}
        checked={checked}
        type="radio"
        value={value}
        disabled={disabled}
      />
      {children}
    </label>
  );
};

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
  value: PropTypes.string,
};

Radio.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false,
};

export default Radio;
