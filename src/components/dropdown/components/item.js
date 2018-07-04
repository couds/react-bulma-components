import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const DropdownItem = ({ active, children, value, ...allProps }) => {
  const props = modifiers.clean(allProps);
  return (
    <div
      title={value}
      {...props}
      role="presentation"
      className={classnames('dropdown-item', modifiers.classnames(allProps), {
        'is-active': active,
      })}
    >
      {children}
    </div>
  );
};

DropdownItem.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  onClick: undefined,
  children: null,
};

export default DropdownItem;
