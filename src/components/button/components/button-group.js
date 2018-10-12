import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const ButtonGroup = ({
  children,
  className,
  hasAddons,
  position,
  renderAs,
  ...allProps
}) => (
  <Element
    renderAs="div"
    className={classnames('buttons', className, modifiers.classnames(allProps), {
      'has-addons': hasAddons,
      [`is-${[position]}`]: position,
    })}
  >
    {children}
  </Element>
);

ButtonGroup.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  position: PropTypes.oneOf([undefined, '', 'centered', 'right']),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

ButtonGroup.defaultProps = {
  className: '',
  hasAddons: undefined,
  position: undefined,
  renderAs: 'div',
};

export default ButtonGroup;
