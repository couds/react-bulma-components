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
}) => (
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
    />
    {children}
  </Element>
);

Radio.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  /**
   * Additional CSS classes to be passed to `Form.Radio`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
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
};

Radio.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  name: undefined,
  value: '',
  style: undefined,
  disabled: false,
  checked: false,
  renderAs: 'input',
};

export default Radio;
