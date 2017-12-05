import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import events from '../../../modifiers/events';

export default class Radio extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string.isRequired,
    /**
     * True disable this input
     */
    disabled: PropTypes.bool,
    /**
     * True if this checkbox is checked
     */
    checked: PropTypes.bool,
    /**
     * The form value of this radio button
     */
    value: PropTypes.any,
    ...events.propTypes,
  }

  static defaultProps = {
    children: null,
    className: '',
    value: '',
    style: {},
    disabled: false,
    checked: false,
    ...events.defaultProps,
  }

  render() {
    const {
      className,
      style,
      disabled,
      checked,
      value,
      name,
      children,
      ...props
    } = this.props;
    return (
      <label
        disabled={disabled}
        className={classnames('radio', className)}
        style={style}
      >
        <input
          {...events.props(props)}
          name={name}
          checked={checked}
          type="radio"
          value={value}
          disabled={disabled}
        />
        {children}
      </label>
    );
  }
}
