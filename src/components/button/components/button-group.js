import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import { normalizeAlign } from '../../../services/normalizer';

const ButtonGroup = ({ className, hasAddons, align, size, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('buttons', className, {
        'has-addons': hasAddons,
        [`is-${[normalizeAlign(align)]}`]: align,
        [`are-${size}`]: size,
      })}
    />
  );
};

ButtonGroup.propTypes = {
  hasAddons: PropTypes.bool,
  /**
   * The size of *all* the buttons in the group.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Align of the group. By default, it is left-aligned.
   */
  align: PropTypes.oneOf(['center', 'right']),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ButtonGroup.defaultProps = {
  renderAs: 'div',
};

export default ButtonGroup;
