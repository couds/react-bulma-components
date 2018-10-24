import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import modifiers from '../../../modifiers';

import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class File extends PureComponent {
  static propTypes = {
    ...modifiers.propTypes,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    onChange: PropTypes.func,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    fileName: PropTypes.bool,
    fullwidth: PropTypes.bool,
    right: PropTypes.bool,
    boxed: PropTypes.bool,
    /**
     * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
     */
    name: PropTypes.string,
    label: PropTypes.string,
  }

  static defaultProps = {
    ...modifiers.defaultProps,
    className: '',
    style: {},
    onChange: null,
    color: null,
    size: null,
    fileName: true,
    fullwidth: false,
    right: false,
    boxed: false,
    name: null,
    label: 'Choose a file...',
  }

  select = (event) => {
    if (!this.props.fileName) {
      return
    }
    const file = event.target
    if (file && file.files.length > 0) {
      this.labelElement.innerHTML = file.files[0].name
    }
    if (this.props.onChange) {
      this.props.onChange()
    }
  }

  render() {
    const {
      className,
      style,
      onChange,
      color,
      size,
      fileName,
      fullwidth,
      right,
      boxed,
      name,
      label,
      ...allProps
    } = this.props;
    const props = modifiers.clean(allProps);

    return (
      <div
        style={style}
        className={classnames('file', className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          'has-name': !fileName,
          'is-right': right,
          'is-boxed': boxed,
          'is-fullwidth': fullwidth,
        })}
      >
        <label className="file-label">
          <input
            {...props}
            name={name}
            value=""
            type="file"
            className="file-input"
            onChange={this.select}
          />
          <span className="file-cta">
            <span className="file-icon">
              <Icon icon="upload" />
            </span>
            <span className="file-label">
              {label}
            </span>
          </span>
          {fileName &&
            <span className="file-name" ref={(node) => { this.labelElement = node }} />
          }
        </label>
      </div>
    );
  }
}
