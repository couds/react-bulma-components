import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DropdownItem = ({ active, children, value, onClick }) => (
  <div
    title={value}
    onClick={onClick}
    role="presentation"
    className={classnames('dropdown-item', {
      'is-active': active,
    })}
  >
    {children}
  </div>
);

DropdownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  active: false,
  onClick: null,
  children: null,
};

export default DropdownItem;
