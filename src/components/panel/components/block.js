import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const PanelBlock = React.forwardRef(({ className, active, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('panel-block', className, {
      'is-active': active
    })}
  />
));

PanelBlock.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  active: PropTypes.bool
};

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
  active: false
};
