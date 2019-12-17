import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

const Select = ({
  className,
  style,
  size,
  color,
  loading,
  readOnly,
  disabled,
  value,
  multiple,
  children,
  name,
  domRef,
  ...props
}) => (
  <Element
    domRef={domRef}
    className={classnames('select', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
      'is-loading': loading,
      'is-multiple': multiple,
    })}
    style={style}
  >
    <Element
      renderAs="select"
      {...props}
      multiple={multiple}
      value={value}
      readOnly={readOnly}
      disabled={disabled}
      name={name}
    >
      {children}
    </Element>
  </Element>
);

Select.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
};

Select.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  value: '',
  style: undefined,
  size: undefined,
  color: undefined,
  readOnly: false,
  disabled: false,
  multiple: false,
  loading: false,
  name: undefined,
};

export default Select;
