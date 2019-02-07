import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { PanelBlock } from './components/block';
import { PanelHeader } from './components/header';
import { PanelIcon } from './components/icon';
import { PanelTabs } from './components/tabs';

export const Panel = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('panel', className)} />
));

Panel.Header = PanelHeader;

Panel.Tabs = PanelTabs;

Panel.Block = PanelBlock;

Panel.Icon = PanelIcon;

Panel.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Panel.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'nav'
};

export default Panel;
