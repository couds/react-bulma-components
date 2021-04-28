import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const TableContainer = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('table-container', className)} />
  );
};

TableContainer.propTypes = {};

TableContainer.defaultProps = {};

export default TableContainer;
