import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const TableContainer = ({ className, children, position, ...props }) => (
  <Element {...props} className={classnames('table-container', className)}>
    {children}
  </Element>
);

TableContainer.propTypes = {
  ...Element.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
};

TableContainer.defaultProps = {
  ...Element.defaultProps,
  style: undefined,
  className: undefined,
  children: null,
  renderAs: 'div',
};

export default TableContainer;
