import React from 'react';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardBody = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('modal-card-body', className)}>
    {children}
  </Element>
);

ModalCardBody.propTypes = {
  ...Element.propTypes,
};

ModalCardBody.defaultProps = {
  ...Element.defaultProps,
  renderAs: 'section',
};

export default ModalCardBody;
