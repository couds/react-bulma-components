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
  value,
  ...props
}) => {
  const ref = useRef();

  useEffect(() => {
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
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'has-name': !!filename,
        'is-right': right,
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
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onChange: PropTypes.func,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  filename: PropTypes.string,
  value: PropTypes.any,
  fullwidth: PropTypes.bool,
  right: PropTypes.bool,
  boxed: PropTypes.bool,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
  inputProps: PropTypes.shape({
    accept: PropTypes.string,
    capture: PropTypes.string,
    multiple: PropTypes.bool,
  }),
};

InputFile.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  onChange: () => {},
  color: undefined,
  size: undefined,
  filename: undefined,
  value: undefined,
  fullwidth: undefined,
  right: undefined,
  boxed: undefined,
  name: undefined,
  icon: undefined,
  label: 'Choose a file...',
  inputProps: {
    accept: undefined,
    capture: undefined,
    multiple: undefined,
  },
};

export default InputFile;
