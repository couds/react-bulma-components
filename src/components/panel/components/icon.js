import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const PanelIcon = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('panel-icon', className)} />
));

PanelIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'span'
};

export default PanelIcon;
