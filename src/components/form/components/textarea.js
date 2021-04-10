import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

const Textarea = ({ className, size, color, status, fixedSize, ...props }) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;
  return (
    <Element
      {...props}
      className={classnames('textarea', className, {
        [`is-${normalizeStatus(status)}`]: status,
        'has-fixed-size': fixedSize,
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
      })}
    />
  );
};

Textarea.propTypes = {
  /**
   * Adjusts the size of the textarea input
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
