import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import events from '../../../modifiers/events';


export default class Checkbox extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    checked: PropTypes.bool,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string,
    ...events.propTypes,
  }

  static defaultProps = {
    children: null,
    className: '',
    value: '',
    style: {},
    disabled: false,
    checked: false,
    name: null,
    ...events.defaultProps,
  }

  render() {
    const {
      className,
      style,
      disabled,
      value,
      children,
      checked,
      name,
      ...props
    } = this.props;
    return (
      <label
        disabled={disabled}
        className={classnames('checkbox', className)}
        style={style}
      >
        <input
          {...events.props(props)}
          name={name}
          type="checkbox"
          value={value}
          disabled={disabled}
        />
        {children}
      </label>
    );
  }
}
