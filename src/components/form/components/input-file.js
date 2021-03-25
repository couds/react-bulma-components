import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import modifiers from '../../../modifiers';

import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const InputFile = ({
  className,
  style,
  onChange,
  color,
  size,
  fullwidth,
  right,
  boxed,
  name,
  label,
  icon,
  inputProps,
  filename,
  files,
  centered,
  ...props
}) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (files) {
      ref.current.files = files;
    } else {
      ref.current.value = '';
    }
  }, [files]);

  return (
    <Element
      style={style}
      {...props}
      className={classnames('file', className, {
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'has-name': !!filename,
        'is-right': right,
        'is-boxed': boxed,
        'is-fullwidth': fullwidth,
        'is-centered': centered,
      })}
    >
      <label className="file-label">
        <input
          {...inputProps}
          name={name}
          type="file"
          className="file-input"
          onChange={onChange}
          ref={ref}
        />
        <span className="file-cta">
          {icon && <span className="file-icon">{icon}</span>}
          <span className="file-label">{label}</span>
        </span>
        {filename && <span className="file-name">{filename}</span>}
      </label>
    </Element>
  );
};

InputFile.propTypes = {
  ...modifiers.propTypes,
  /**
   * Additional CSS classes to pass to `InputFile`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  /**
   * Callback for when the value of the input changes.
   * Same signature as the onChange prop for `<input type="file">`.
   */
  onChange: PropTypes.func,
  /**
   * The color of `InputFile`
   */
  color: PropTypes.oneOf(colors),
  /**
   * The size of `InputFile`
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The name of the selected file. It will be shown as the file label
   * of this component, next/under the upload button.
   */
  filename: PropTypes.string,
  /**
   * The selected file object.
   */
  value: PropTypes.any,
  /**
   * Whether `InputFile` should take up all available width.
   */
  fullwidth: PropTypes.bool,
  /**
   * Whether `InputFile` should be aligned to the right.
   */
  right: PropTypes.bool,
  /**
   * Whether `InputFile` should be centered.
   */
  centered: PropTypes.bool,
  /**
   * Whether `InputFile` should be rendered in a box shape.
   */
  boxed: PropTypes.bool,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  /**
   * Label for the upload button.
   */
  label: PropTypes.string,
  /**
   * An optional icon to be drawn in the button next to/on top of the button label.
   *
   * `icon={<i className="fas ..." />}`
   */
  icon: PropTypes.element,
  /**
   * Additional props to be passed to the underlying `<input>` element.
   * Other props passed to `InputFile` itself will be passed to the element
   * that wraps around the `<input>` element.
   */
  inputProps: PropTypes.shape({}),
};

InputFile.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  onChange: () => {},
  color: undefined,
  size: undefined,
  filename: undefined,
  files: undefined,
  fullwidth: undefined,
  right: undefined,
  centered: undefined,
  boxed: undefined,
  name: undefined,
  icon: undefined,
  label: 'Choose a file...',
  inputProps: {},
};

export default InputFile;
