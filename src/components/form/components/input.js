import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

class Input extends React.PureComponent {
  render() {
    const {
      className,
      type,
      size,
      color,
      readOnly,
      isStatic,
      disabled,
      placeholder,
      value,
      name,
      innerRef,
      ...props
    } = this.props;
    return (
      <Element
        {...props}
        ref={innerRef}
        renderAs="input"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly || isStatic}
        disabled={disabled}
        className={cn('input', className, {
          'is-static': isStatic,
          [`is-${size}`]: size,
          [`is-${color}`]: color
        })}
      />
    );
  }
}

Input.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf([
    'text',
    'email',
    'tel',
    'password',
    'number',
    'search',
    'color',
    'date',
    'time',
    'datetime-local'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  isStatic: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  value: '',
  style: {},
  type: 'text',
  size: null,
  color: null,
  readOnly: false,
  isStatic: false,
  disabled: false,
  placeholder: '',
  name: null
};

export default React.forwardRef((props, ref) => <Input innerRef={ref} {...props} />);
