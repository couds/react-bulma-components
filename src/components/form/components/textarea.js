import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Textarea = ({ className, size, color, rows, ...props }) => (
  <Element
    {...props}
    rows={rows}
    className={classnames('textarea', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Textarea.propTypes = {
  ...modifiers.propTypes,
  /**
   * Additional CSS classes to be passed to `<Form.Textarea />`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  /**
   * Adjusts the size of the textarea input
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The color of this input.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Specifies what component `<Form.Textarea />` should be rendered as.
   */
  renderAs: renderAsShape,
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'textarea',
  className: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
};

export default Textarea;
