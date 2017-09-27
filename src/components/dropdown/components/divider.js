import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DropdownDivider = ({ style, className }) => (
  <hr
    style={style}
    className={classnames('dropdown-divider', className)}
  />
);

DropdownDivider.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  style: {},
  className: '',
};

export default DropdownDivider;
