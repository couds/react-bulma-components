import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Textarea = ({ className, size, color, status, fixedSize, ...props }) => (
  <Element
    {...props}
    className={classnames('textarea', className, {
      [`is-${status}ed`]: status,
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
  status: PropTypes.oneOf(['focus', 'hover']),
  /**
   * Whether the size of this textarea should be fixed regardless of its content.
   */
  fixedSize: PropTypes.bool,
  disabled: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Textarea.defaultProps = {
  renderAs: 'textarea',
};

export default Textarea;
