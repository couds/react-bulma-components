import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalCardTitle = ({
  children,
  className,
  ...props
}) => (
  <p
    {...props}
    className={classnames('modal-card-title', className)}
  >
    {children}
  </p>
);

ModalCardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardTitle.defaultProps = {
  children: null,
  className: '',
  style: {},
};

export default ModalCardTitle;
