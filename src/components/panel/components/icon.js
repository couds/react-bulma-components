import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const PanelIcon = ({ className, ...props }) => (
  <Element {...props} className={classnames('panel-icon', className)} />
);

PanelIcon.propTypes = {
  ...Element.propTypes,
};

PanelIcon.defaultProps = {
  renderAs: 'span',
};

export default PanelIcon;
