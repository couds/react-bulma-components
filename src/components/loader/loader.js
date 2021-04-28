import React from 'react';
import classnames from 'classnames';

import Element from '../element';

const Loader = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('loader', className)}>
      {children}
    </Element>
  );
};

Loader.propTypes = {};

export default Loader;
