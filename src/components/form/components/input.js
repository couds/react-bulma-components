import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

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
  className: PropTypes.string,
  style: PropTypes.shape({}),
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  isStatic: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
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
