import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../../button';

import Element from '../../../element';
import useModalContext from '../../context';

const ModalCardHead = ({ children, className, showClose, ...props }) => {
  const { onClose } = useModalContext();
  return (
    <Element {...props} className={classnames('modal-card-head', className)}>
      {children}
      {showClose && <Button remove onClick={onClose} />}
    </Element>
  );
};

ModalCardHead.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  showClose: PropTypes.bool,
};

ModalCardHead.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  showClose: true,
  renderAs: 'header',
};

export default ModalCardHead;
