import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const ModalContent = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('modal-content', className)}>
      {children}
    </Element>
  );
};

ModalContent.propTypes = {};

export default ModalContent;
