import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Select extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(colors),
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    value: PropTypes.string,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: '',
    value: '',
    style: {},
    size: null,
    color: null,
    readOnly: false,
    disabled: false,
    multiple: false,
    name: null,
  }

  render() {
    const {
      className,
      style,
      size,
      color,
      readOnly,
      disabled,
      value,
      multiple,
      children,
      name,
      ...props
    } = this.props;
    return (
      <div
        className={classnames('select', className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          'is-multiple': multiple,
        })}
        style={style}
      >
        <select
          {...props}
          multiple={multiple}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          name={name}
        >
          {children}
        </select>
      </div>
    );
  }
}
