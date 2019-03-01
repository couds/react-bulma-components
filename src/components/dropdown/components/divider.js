import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const DropdownDivider = ({ className, ...props }) => (
  <Element
    renderAs="hr"
    {...props}
    className={classnames('dropdown-divider', className)}
  />
);

DropdownDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps,
  style: undefined,
  className: undefined,
};

export default DropdownDivider;
