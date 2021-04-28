import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../../element';

const PanelTabsTab = ({ className, active, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(className, {
        'is-active': active,
      })}
    />
  );
};

PanelTabsTab.propTypes = {
  active: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

PanelTabsTab.defaultProps = {
  renderAs: 'a',
};

export default PanelTabsTab;
