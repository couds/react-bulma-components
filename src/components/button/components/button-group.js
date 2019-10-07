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
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.oneOf(['centered', 'right']),
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
