import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Input = ({
  className,
  size,
  color,
  readOnly,
  isStatic,
  status,
  rounded,
  ...props
}) => (
  <Element
    {...props}
    readOnly={readOnly || isStatic}
    className={classnames('input', className, {
      'is-static': isStatic,
      [`is-${status}ed`]: status,
      'is-rounded': rounded,
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Input.propTypes = {
  /**
   * Adjusts the size of this input.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The color of this input.
   */
  color: PropTypes.oneOf(colors),
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
