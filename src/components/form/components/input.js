import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

const Input = ({
  className,
  size,
  color,
  readOnly,
  isStatic,
  status,
  rounded,
  ...props
}) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;
  return (
    <Element
      {...props}
      readOnly={readOnly || isStatic}
      className={classnames('input', className, {
        'is-static': isStatic,
        [`is-${normalizeStatus(status)}`]: status,
        'is-rounded': rounded,
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
      })}
    />
  );
};

Input.propTypes = {
  /**
   * Adjusts the size of this input.
   */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * The color of this input.
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
   * Whether this input should be read-only.
   * Equivalent to the readonly attribute of the `<input>` element.
   */
  readOnly: PropTypes.bool,
  /**
   * Whether this input should be static.
   * If true, this input will be readonly, and all the input decorations
   * are removed.
   */
  isStatic: PropTypes.bool,
  status: PropTypes.oneOf(['focus', 'hover']),
  /**
   * Whether this input is rounded. The input will have a 50% border-radius,
   * making the left and right side fully rounded.
   */
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Input.defaultProps = {
  renderAs: 'input',
};

export default Input;
