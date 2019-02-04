import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import Element from '../../element';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class InputFile extends PureComponent {
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
    icon: PropTypes.element
  };

  static defaultProps = {
    ...modifiers.defaultProps,
    className: undefined,
    style: undefined,
    onChange: () => {},
    color: undefined,
    size: undefined,
    fileName: true,
    fullwidth: undefined,
    right: undefined,
    boxed: undefined,
    name: undefined,
    icon: undefined,
    label: 'Choose a file...'
  };

  state = {
    filename: undefined
  };

  select = event => {
    const { files } = event.target;
    this.setState({
      filename: files.length > 0 ? files[0].name : undefined
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

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
      icon,
      ...props
    } = this.props;

    const { filename } = this.state;

    return (
      <Element
        style={style}
        {...props}
        className={cn('file', className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          'has-name': !fileName,
          'is-right': right,
          'is-boxed': boxed,
          'is-fullwidth': fullwidth
        })}
      >
        <label className="file-label">
          <input name={name} value="" type="file" className="file-input" onChange={this.select} />
          <span className="file-cta">
            {icon && <span className="file-icon">{icon}</span>}
            <span className="file-label">{label}</span>
          </span>
          {fileName && filename && <span className="file-name">{filename}</span>}
        </label>
      </Element>
    );
  }
}
