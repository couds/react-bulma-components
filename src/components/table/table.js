import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Table = ({
  children,
  className,
  size,
  striped,
  bordered,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <table
      {...props}
      className={classnames('table', ...modifiers.propTypes, className, {
        [`is-${size}`]: size,
        'is-bordered': bordered,
        'is-striped': striped,
      })}
    >
      {children}
    </table>
  );
};

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
  className: '',
  style: {},
  size: 'fullwidth',
  striped: true,
  bordered: false,
};

export default Table;
