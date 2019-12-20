import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

const Textarea = ({
  className,
  size,
  color,
  readOnly,
  disabled,
  placeholder,
  rows,
  value,
  name,
  ...props
}) => (
  <Element
    renderAs="textarea"
    name={name}
    {...props}
    value={value}
    rows={rows}
    placeholder={placeholder}
    readOnly={readOnly}
    disabled={disabled}
    className={classnames('textarea', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Textarea.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
  readOnly: false,
  disabled: false,
  placeholder: '',
  rows: 4,
  value: '',
  name: '',
};

export default Textarea;
