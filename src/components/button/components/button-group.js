import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import { normalizeAlign } from '../../../services/normalizer';

const ButtonGroup = ({ className, hasAddons, position, size, ...props }) => (
  <Element
    {...props}
    className={classnames('buttons', className, {
      'has-addons': hasAddons,
      [`is-${[normalizeAlign(position)]}`]: position,
      [`are-${size}`]: size,
    })}
  />
);

ButtonGroup.propTypes = {
  hasAddons: PropTypes.bool,
  /**
   * The size of *all* the buttons in the group.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Position of the group. By default, it is left-aligned.
   */
  position: PropTypes.oneOf(['center', 'right']),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ButtonGroup.defaultProps = {
  hasAddons: undefined,
  position: undefined,
  size: undefined,
  renderAs: 'div',
};

export default ButtonGroup;
