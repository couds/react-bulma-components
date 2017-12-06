import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';
import events from '../../../modifiers/events';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Textarea extends PureComponent {
  static propTypes = {
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
     * The text to be displayed if the input is empty
     */
    placeholder: PropTypes.string,
    /**
     * The value of the input field
     */
    value: PropTypes.string,
    /**
     * Number of rows of this textarea
     */
    rows: PropTypes.number,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string,
    ...events.propTypes,
  }

  static defaultProps = {
    className: '',
    style: {},
    size: null,
    color: null,
    readOnly: false,
    disabled: false,
    placeholder: '',
    rows: 4,
    value: '',
    name: '',
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
      placeholder,
      rows,
      value,
      name,
      ...props
    } = this.props;
    return (
      <textarea
        name={name}
        {...events.props(props)}
        value={value}
        rows={rows}
        style={style}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        className={classnames('textarea', className, {
        [`is-${size}`]: size,
        [`is-${color}`]: color,
      })}
      />
    );
  }
}
