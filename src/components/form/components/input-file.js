import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

const colors = Object.values(CONSTANTS.COLORS);

export const InputFile = React.forwardRef(
  (
    {
      className,
      style, // eslint-disable-next-line no-unused-vars
      onChange,
      color,
      size,
      hasName,
      fullWidth,
      right,
      boxed,
      name,
      label,
      icon,
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = useState(null);

    const handleSelect = event => {
      const { files } = event.target;
      setFileName(files.length > 0 ? files[0].name : undefined);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <Element
        style={style}
        {...props}
        className={cn('file', className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          'has-name': !hasName,
          'is-right': right,
          'is-boxed': boxed,
          'is-fullWidth': fullWidth
        })}
      >
        <label className="file-label">
          <input
            ref={ref}
            name={name}
            value=""
            type="file"
            className="file-input"
            onChange={handleSelect}
            data-testid="file-input"
          />
          <span className="file-cta">
            {icon && <span className="file-icon">{icon}</span>}
            <span className="file-label">{label}</span>
          </span>
          {hasName && fileName && (
            <span data-testid="file-name" className="file-name">
              {fileName}
            </span>
          )}
        </label>
      </Element>
    );
  }
);

InputFile.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onChange: PropTypes.func,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  hasName: PropTypes.bool,
  fullWidth: PropTypes.bool,
  right: PropTypes.bool,
  boxed: PropTypes.bool,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element
};

InputFile.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  onChange: () => {},
  color: null,
  size: null,
  hasName: true,
  fullWidth: false,
  right: false,
  boxed: false,
  name: '',
  icon: null,
  label: 'Choose a file...'
};
