import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';

import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const PanelTabs = ({ className, ...props }) => (
  <Element {...props} className={classnames('panel-tabs', className)} />
);

PanelTabs.Tab = Tab;

PanelTabs.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

PanelTabs.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default PanelTabs;
