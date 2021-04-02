import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Textarea = ({
  className,
  size,
  color,
  focused,
  hovered,
  fixedSize,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('textarea', className, {
      'is-focused': focused,
      'is-hovered': hovered,
      'has-fixed-size': fixedSize,
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Textarea.propTypes = {
  ...Element.propTypes,
  /**
   * Adjusts the size of the textarea input
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The color of this input.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Whether this textarea is in a focused state.
   */
  focused: PropTypes.bool,
  /**
   * Whether this textarea is in a hovered state.
   */
  hovered: PropTypes.bool,
  /**
   * Whether the size of this textarea should be fixed regardless of its content.
   */
  fixedSize: PropTypes.bool,
};

Textarea.defaultProps = {
  ...Element.defaultProps,
  renderAs: 'textarea',
  size: undefined,
  focused: false,
  hovered: false,
  fixedSize: false,
  color: undefined,
};

export default Textarea;
