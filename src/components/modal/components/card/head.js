import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../../button';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const ModalCardHead = ({
  children,
  className,
  showClose,
  onClose,
  ...props
}) => (
  <Element {...props} className={classnames('modal-card-head', className)}>
    {children}
    {showClose && <Button remove onClick={onClose} />}
  </Element>
);

ModalCardHead.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  showClose: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalCardHead.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  showClose: true,
  onClose: undefined,
  renderAs: 'header',
};

export default ModalCardHead;
