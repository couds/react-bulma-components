import React from 'react';
import classnames from 'classnames';
import Element from '../element';

const Box = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('box', className)}>
    {children}
  </Element>
);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
