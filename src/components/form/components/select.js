import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Select = ({
  className,
  rounded,
  style,
  size,
  color,
  loading,
  hovered,
  focused,
  readOnly,
  disabled,
  value,
  multiple,
  children,
  name,
  domRef,
  ...props
}) => {
  /**
   * Return default value for value prop
   */
  function defaultValue() {
    return multiple ? [] : '';
  }

  return (
    <Element
      domRef={domRef}
      className={classnames('select', className, {
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-loading': loading,
        'is-multiple': multiple,
        'is-rounded': rounded,
      })}
      style={style}
    >
      <Element
        {...props}
        className={classnames({
          'is-focused': focused,
          'is-hovered': hovered,
        })}
        multiple={multiple}
        value={value !== undefined ? value : defaultValue()}
        readOnly={readOnly}
        disabled={disabled}
        name={name}
      >
        {children}
      </Element>
    </Element>
  );
};

Select.propTypes = {
  ...Element.propTypes,
  /**
   * Children of this component. Usually they are `<option>` elements.
   */
  children: PropTypes.node,
  /**
   * Additional CSS classes to be passed to this component.
   * They will be applied to the wrapper element around the
   * actual `<select>` element.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  /**
   * Adjusts the size of this component.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Adjusts the color of this component.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Whether the dropdown button should have fully rounded corners.
   */
  rounded: PropTypes.bool,
  readOnly: PropTypes.bool,
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
  hovered: PropTypes.bool,
  /**
   * Whether this component is focused.
   */
  focused: PropTypes.bool,
  /**
   * The value that is held by the `<select>` element.
   * Must be an array if `multiple` prop is true.
   *
   * If this prop is undefined, an empty string will be the default value
   * of `<select>`, or an empty array if `multiple` is true.
   */
  value: (props, propName, componentName) => {
    if (props.multiple) {
      PropTypes.checkPropTypes(
        {
          [propName]: PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          ),
        },
        props,
        propName,
        componentName,
      );
    } else {
      PropTypes.checkPropTypes(
        {
          [propName]: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        },
        props,
        propName,
        componentName,
      );
    }
  },
  /**
   * The name of the input field.
   * Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
};

Select.defaultProps = {
  ...Element.defaultProps,
  renderAs: 'select',
  children: null,
  className: undefined,
  value: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
  readOnly: false,
  disabled: false,
  multiple: false,
  loading: false,
  hovered: false,
  focused: false,
  name: undefined,
};

export default Select;
