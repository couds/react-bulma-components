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
  /**
   * True if the card should display the close button on the header of the modal card
   */
  showClose: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ModalCardHead.defaultProps = {
  showClose: true,
  renderAs: 'header',
};

export default ModalCardHead;
