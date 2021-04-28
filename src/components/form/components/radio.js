import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Radio = ({
  className,
  style,
  disabled,
  checked,
  value,
  name,
  children,
  domRef,
  ...props
}) => {
  return (
    <Element
      renderAs="label"
      domRef={domRef}
      disabled={disabled}
      className={classnames('radio', className)}
      style={style}
    >
      <Element
        {...props}
        name={name}
        checked={checked}
        type="radio"
        value={value}
        disabled={disabled}
      />{' '}
      {children}
    </Element>
  );
};

Radio.propTypes = {
  /**
   * The name of the input field.
   * Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  /**
   * React style object for `Form.Radio`
   */
  style: PropTypes.shape({}),
  /**
   * Whether this radio button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Whether this radio button is checked,
   */
  checked: PropTypes.bool,
  /**
   * The associated value of this radio button.
   * You can retrieve this value in the onChange handler of this component.
   */
  value: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Radio.defaultProps = {
  renderAs: 'input',
};

export default Radio;
