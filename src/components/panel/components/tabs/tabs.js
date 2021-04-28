import React from 'react';
import classnames from 'classnames';
import Tab from './components/tab';

import Element from '../../../element';

const PanelTabs = ({ className, ...props }) => {
  return <Element {...props} className={classnames('panel-tabs', className)} />;
};

PanelTabs.Tab = Tab;

PanelTabs.propTypes = {};

export default PanelTabs;
