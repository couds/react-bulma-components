import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';
import Container from './components/container';

const Table = ({
  children,
  className,
  size,
  striped,
  bordered,
  hoverable,
  ...props
}) => (
  <Element
    renderAs="table"
    {...props}
    className={classnames('table', className, {
      [`is-${size}`]: size,
      'is-bordered': bordered,
      'is-striped': striped,
      'is-hoverable': hoverable,
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
  hoverable: PropTypes.bool,
};

Table.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  size: 'fullwidth',
  striped: true,
  bordered: false,
  hoverable: false,
};

Table.Container = Container;

export default Table;
