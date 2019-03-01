import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const Checkbox = ({
  className,
  style,
  disabled,
  value,
  children,
  checked,
  name,
  domRef,
  ...props
}) => (
  <Element
    renderAs="label"
    domRef={domRef}
    disabled={disabled}
    className={classnames('checkbox', className)}
    style={style}
  >
    <Element
      {...props}
      renderAs="input"
      name={name}
      type="checkbox"
      value={value}
      disabled={disabled}
      checked={checked}
    />
    {children}
  </Element>
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
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  value: undefined,
  style: undefined,
  disabled: undefined,
  checked: undefined,
  name: undefined,
};

export default Checkbox;
