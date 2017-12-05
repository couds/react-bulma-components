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
    type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(colors),
    readOnly: PropTypes.bool,
    isStatic: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
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
