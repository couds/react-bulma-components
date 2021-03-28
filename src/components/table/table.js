import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['fullwidth', 'narrow']),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
};

Table.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  size: undefined,
  striped: true,
  bordered: false,
  hoverable: false,
};

Table.Container = Container;

export default Table;
