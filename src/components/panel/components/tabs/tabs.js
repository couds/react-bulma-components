import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';

const PanelTabs = ({
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('panel-tabs', className)}
    />
  );
};

PanelTabs.Tab = Tab;

PanelTabs.propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

PanelTabs.defaultProps = {
  className: '',
  renderAs: 'div',
};

export default PanelTabs;
