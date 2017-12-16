import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import events from '../../../modifiers/events';

export default class Radio extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
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
