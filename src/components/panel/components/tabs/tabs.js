import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const PanelTabs = ({
  className,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('panel-tabs', className)}
  />
);

PanelTabs.Tab = Tab;

PanelTabs.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

PanelTabs.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default PanelTabs;
