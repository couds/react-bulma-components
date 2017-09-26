import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalCardBody = ({
  children,
  className,
  style,
}) => (
  <section
    style={style}
    className={classnames('modal-card-body', className)}
  >
    {children}
  </section>
);

ModalCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

ModalCardBody.defaultProps = {
  children: null,
  className: '',
  style: {},
};

export default ModalCardBody;
