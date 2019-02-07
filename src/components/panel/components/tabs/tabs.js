import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';
import { PanelTabsTab } from './components/tab';

export const PanelTabs = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('panel-tabs', className)} />
));

PanelTabs.Tab = PanelTabsTab;

PanelTabs.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelTabs.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div'
};
