import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';

import useFieldContext from './field/context';
import { normalizeAlign } from '../../../services/normalizer';

const InputFile = ({
  className,
  style,
  onChange,
  color,
  size,
  fullwidth,
  align,
  boxed,
  name,
  label,
  icon,
  inputProps,
  filename,
  value,
  ...props
}) => {
  const ref = useRef();
  const context = useFieldContext();
  const calculatedSize = size || context.size;

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (value) {
      ref.current.files = value;
    } else {
      ref.current.value = '';
    }
  }, [value]);

  return (
    <Element
      style={style}
      {...props}
      className={classnames('file', className, {
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
        [`is-${normalizeAlign(align)}`]: align,
        'has-name': !!filename,
        'is-boxed': boxed,
        'is-fullwidth': fullwidth,
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
  /**
   * The color of `InputFile`
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  /**
   * The size of `InputFile`
   */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * The name of the selected file. It will be shown as the file label
   * of this component, next/under the upload button.
   */
  filename: PropTypes.string,
  /**
   * The selected file(s) object.
   */
  value: PropTypes.any,
  /**
   * Whether `InputFile` should take up all available width.
   */
  fullwidth: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'right']),
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
  label: 'Choose a file...',
  inputProps: {},
};

export default InputFile;
