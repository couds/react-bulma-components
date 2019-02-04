import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import Element from '../../element';

const PanelHeader = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('panel-heading', className)} />
));

PanelHeader.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelHeader.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div'
};

export default PanelHeader;
