import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';

export const DropdownDivider = ({ className, ...allProps }) => {
  const props = modifiers.clean(allProps);
  return <hr {...props} className={cn('dropdown-divider', modifiers.getClassName(allProps), className)} />;
};

DropdownDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string
};

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: ''
};
