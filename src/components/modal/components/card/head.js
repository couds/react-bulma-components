import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../../button';

const ModalCardHead = ({
  children,
  className,
  showClose,
  onClose,
  ...props
}) => (
  <header
    {...props}
    className={classnames('modal-card-head', className)}
  >
    {children}
    {showClose && <Button remove onClick={onClose} />}
  </header>
);

ModalCardHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  showClose: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalCardHead.defaultProps = {
  children: null,
  className: '',
  style: {},
  showClose: true,
  onClose: null,
};

export default ModalCardHead;
