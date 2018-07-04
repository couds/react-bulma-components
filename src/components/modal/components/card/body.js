import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalCardBody = ({
  children,
  className,
  ...props
}) => (
  <section
    {...props}
    className={classnames('modal-card-body', className)}
  >
    {children}
  </section>
);

ModalCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardBody.defaultProps = {
  children: null,
  className: '',
  style: {},
};

export default ModalCardBody;
