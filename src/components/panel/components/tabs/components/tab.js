import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../../element';
import renderAsShape from '../../../../../modifiers/render-as';

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
  className: PropTypes.string,
  renderAs: renderAsShape,
  active: PropTypes.bool,
};

PanelTabsTab.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'a',
  active: false,
};

export default PanelTabsTab;
