import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

const Select = ({
  className,
  rounded,
  style,
  size,
  color,
  loading,
  status,
  disabled,
  value,
  multiple,
  children,
  name,
  domRef,
  fullwidth,
  ...props
}) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;

  return (
    <Element
      domRef={domRef}
      className={classnames('select', className, {
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
        'is-fullwidth': fullwidth,
        'is-loading': loading,
        'is-multiple': multiple,
        'is-rounded': rounded,
      })}
      style={style}
    >
      <Element
        {...props}
        className={classnames({
          [`is-${normalizeStatus(status)}`]: status,
        })}
        multiple={multiple}
        value={value}
        disabled={disabled}
        name={name}
      >
        {children}
      </Element>
    </Element>
  );
};

Select.propTypes = {
  /**
   * Adjusts the size of this component.
   */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * Adjusts the color of this component.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  /**
   * Whether the dropdown button should have fully rounded corners.
   */
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Whether the `<select>` element should accept multiple values.
   * If true, then the `value` prop can only accept an array.
   */
  multiple: PropTypes.bool,
  /**
   * Whether a loading spinner should be shown in place of the dropdown arrow
   */
  loading: PropTypes.bool,
  /**
   * Whether this component is hovered.
   */
  status: PropTypes.oneOf(['hover', 'focus']),
  /**
   * The value that is held by the `<select>` element.
   * Must be an array if `multiple` prop is true.
   *
   * If this prop is undefined, an empty string will be the default value
   * of `<select>`, or an empty array if `multiple` is true.
   */
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * The name of the input field.
   * Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Select.defaultProps = {
  renderAs: 'select',
};

export default Select;
