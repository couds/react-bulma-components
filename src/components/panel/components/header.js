import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const PanelHeader = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('panel-heading', className)} />
  );
};

PanelHeader.propTypes = {};

export default PanelHeader;
