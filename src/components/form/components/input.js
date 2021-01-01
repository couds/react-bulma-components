import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Input = ({
  className,
  type,
  size,
  color,
  readOnly,
  isStatic,
  disabled,
  placeholder,
  value,
  name,
  ...props
}) => (
  <Element
    {...props}
    renderAs="input"
    name={name}
    value={value}
    type={type}
    placeholder={placeholder}
    readOnly={readOnly || isStatic}
    disabled={disabled}
    className={classnames('input', className, {
      'is-static': isStatic,
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Input.propTypes = {
  ...modifiers.propTypes,
  type: PropTypes.oneOf([
    'text',
    'email',
    'tel',
    'password',
    'number',
    'search',
    'color',
    'date',
    'time',
    'datetime-local',
  ]),
  /**
   * Adjusts the size of this input.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The color of this input.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Whether this input should be read-only.
   * Equivalent to the readonly attribute of the <input> element.
   */
  readOnly: PropTypes.bool,
  /**
   * Whether this input should be static.
   * If true, this input will be readonly, and all the input decorations
   * are removed.
   */
  isStatic: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name of the input field.
   * Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  /**
   * Additional CSS classes to be passed to `<Form.Input />`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  value: '',
  style: undefined,
  type: 'text',
  size: undefined,
  color: undefined,
  readOnly: false,
  isStatic: false,
  disabled: false,
  placeholder: '',
  name: undefined,
};

export default Input;
