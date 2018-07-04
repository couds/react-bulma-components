import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const DropdownDivider = ({ className, ...allProps }) => {
  const props = modifiers.clean(allProps);
  return (
    <hr
      {...props}
      className={classnames('dropdown-divider', modifiers.classnames(allProps), className)}
    />
  );
};

DropdownDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
};

export default DropdownDivider;
