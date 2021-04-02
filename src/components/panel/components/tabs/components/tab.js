import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../../element';

const PanelTabsTab = ({ className, active, ...props }) => (
  <Element
    {...props}
    className={classnames(className, {
      'is-active': active,
    })}
  />
);

PanelTabsTab.propTypes = {
  ...Element.propTypes,
  active: PropTypes.bool,
};

PanelTabsTab.defaultProps = {
  renderAs: 'a',
};

export default PanelTabsTab;
