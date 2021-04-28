import React from 'react';
import classnames from 'classnames';

import Element from '../../../element';

const FieldBody = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('field-body', className, {})}>
      {children}
    </Element>
  );
};

FieldBody.propTypes = {};

FieldBody.defaultProps = {};

export default FieldBody;
