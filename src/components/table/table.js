import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

const Table = ({ children, className, size, striped, bordered, ...props }) => (
  <Element
    renderAs="table"
    {...props}
    className={classnames('table', className, {
      [`is-${size}`]: size,
      'is-bordered': bordered,
      'is-striped': striped,
    })}
  >
    {children}
  </Element>
);

Table.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['fullwidth', 'narrow']),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
};

Table.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  size: 'fullwidth',
  striped: true,
  bordered: false,
};

export default Table;
