import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../../element';

const ModalCardBody = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('modal-card-body', className)}>
      {children}
    </Element>
  );
};

ModalCardBody.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ModalCardBody.defaultProps = {
  renderAs: 'section',
};

export default ModalCardBody;
