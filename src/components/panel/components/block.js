import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const PanelBlock = ({ className, active, ...props }) => (
  <Element
    {...props}
    className={classnames('panel-block', className, {
      'is-active': active,
    })}
  />
);

PanelBlock.propTypes = {
  ...Element.propTypes,
};

export default PanelBlock;
