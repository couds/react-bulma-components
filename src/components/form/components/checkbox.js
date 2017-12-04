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
      value,
      children,
      checked,
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
          type="checkbox"
          value={value}
          disabled={disabled}
        />
        {children}
      </label>
    );
  }
}
