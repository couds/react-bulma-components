import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DropdownDivider = ({ className, ...props }) => (
  <hr
    {...props}
    className={classnames('dropdown-divider', className)}
  />
);

DropdownDivider.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  style: {},
  className: '',
};

export default DropdownDivider;
