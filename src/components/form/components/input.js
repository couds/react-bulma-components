import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../../constants';
import events from '../../../modifiers/events';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * Input type
     */
    type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
    /**
     * The size of button using the classes from Bulma
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * The color of button using the classes from Bulma
     */
    color: PropTypes.oneOf(colors),
    /**
     * True if this input is read-only
     */
    readOnly: PropTypes.bool,
    /**
     * True removes the background, border, shadow, and horizontal padding, while maintaining the vertical spacing so you can easily align the input in any context, like a horizontal form
     */
    isStatic: PropTypes.bool,
    /**
     * True disable this input
     */
    disabled: PropTypes.bool,
    /**
     * The text to be displayed if the input is empty
     */
    placeholder: PropTypes.string,
    /**
     * The value of the input field
     */
    value: PropTypes.string,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string,
    ...events.propTypes,
  }

  static defaultProps = {
    className: '',
    value: '',
    style: {},
    type: 'text',
    size: null,
    color: null,
    readOnly: false,
    isStatic: false,
    disabled: false,
    placeholder: '',
    name: null,
    ...events.defaultProps,
  }

  render() {
    const {
      className,
      style,
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
    } = this.props;
    return (
      <input
        {...props}
        {...events.props(props)}
        name={name}
        value={value}
        style={style}
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
  }
}
