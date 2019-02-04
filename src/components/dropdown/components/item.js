import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import Element from '../../element';

const DropdownItem = ({ active, children, value, ...props }) => (
  <Element
    title={value}
    {...props}
    role="presentation"
    className={cn('dropdown-item', {
      'is-active': active
    })}
  >
    {children}
  </Element>
);

DropdownItem.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  onClick: undefined,
  children: null
};

export default DropdownItem;
