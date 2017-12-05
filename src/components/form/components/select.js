import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';
import events from '../../../modifiers/events';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Select extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * The size of button using the classes from Bulma
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * The color of button using the classes from Bulma
     */
    color: PropTypes.oneOf(colors),
    /**
     * True if this element is read-only
     */
    readOnly: PropTypes.bool,
    /**
     * True disable this element
     */
    disabled: PropTypes.bool,
    /**
     * Tru to allow multiple selection
     */
    multiple: PropTypes.bool,
    /**
     * The value of the element field
     */
    value: PropTypes.any,
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
    size: null,
    color: null,
    readOnly: false,
    disabled: false,
    multiple: false,
    name: null,
    ...events.defaultProps,
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
          {...events.props(props)}
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
