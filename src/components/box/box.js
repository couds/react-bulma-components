import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../element';

const Box = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('box', className)}>
    {children}
  </Element>
);

Box.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Box.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default Box;
