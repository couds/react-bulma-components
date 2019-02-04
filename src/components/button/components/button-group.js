import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import Element from '../../element';

const ButtonGroup = ({ children, className, hasAddons, position, renderAs, ...props }) => (
  <Element
    {...props}
    renderAs={renderAs}
    className={cn('buttons', className, {
      'has-addons': hasAddons,
      [`is-${[position]}`]: position
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
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

ButtonGroup.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  hasAddons: undefined,
  position: undefined,
  renderAs: 'div'
};

export default ButtonGroup;
