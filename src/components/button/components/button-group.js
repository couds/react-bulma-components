import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const ButtonGroup = ({
  children,
  className,
  hasAddons,
  position,
  size,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('buttons', className, {
      'has-addons': hasAddons,
      [`is-${[position]}`]: position,
      [`are-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

ButtonGroup.propTypes = {
  ...modifiers.propTypes,
  /**
   * Additional CSS classes to pass to Button.Group
   */
  className: PropTypes.string,
  /**
   * Whether the buttons should be displayed as "addons". If true, the buttons will stick together.
   */
  hasAddons: PropTypes.bool,
  /**
   * The size of *all* the buttons in the group.
   */
  size: PropTypes.string,
  /**
   * Position of the group. By default, it is left-aligned.
   */
  position: PropTypes.oneOf(['centered', 'right']),
  /**
   * The custom component that Button.Group should be rendered as.
   */
  renderAs: renderAsShape,
};

ButtonGroup.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  hasAddons: undefined,
  position: undefined,
  size: undefined,
  renderAs: 'div',
};

export default ButtonGroup;
