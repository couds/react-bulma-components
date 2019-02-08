import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

const ButtonGroup = ({ children, className, hasAddons, position, size, renderAs, ...props }) => (
  <Element
    {...props}
    renderAs={renderAs}
    className={cn('buttons', className, {
      'has-addons': hasAddons,
      [`are-${size}`]: size,
      [`is-${position}`]: position
    })}
  >
    {children}
  </Element>
);

ButtonGroup.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  position: PropTypes.oneOf(['centered', 'right']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

ButtonGroup.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  hasAddons: undefined,
  position: undefined,
  size: undefined,
  renderAs: 'div'
};

export default ButtonGroup;
