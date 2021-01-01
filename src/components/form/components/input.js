import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Input = ({
  className,
  size,
  color,
  readOnly,
  isStatic,
  hovered,
  focused,
  name,
  ...props
}) => (
  <Element
    {...props}
    renderAs="input"
    name={name}
    readOnly={readOnly || isStatic}
    className={classnames('input', className, {
      'is-static': isStatic,
      'is-hovered': hovered,
      'is-focused': focused,
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Input.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  isStatic: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  type: 'text',
  size: undefined,
  color: undefined,
  readOnly: false,
  isStatic: false,
  focused: false,
  hovered: false,
  name: undefined,
};

export default Input;
