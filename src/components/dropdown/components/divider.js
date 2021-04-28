import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const DropdownDivider = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('dropdown-divider', className)} />
  );
};

DropdownDivider.propTypes = {};

DropdownDivider.defaultProps = {
  renderAs: 'hr',
};

export default DropdownDivider;
