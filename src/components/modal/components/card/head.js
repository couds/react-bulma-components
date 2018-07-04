import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../../button';
import modifiers from '../../../../modifiers';

const ModalCardHead = ({
  children,
  className,
  showClose,
  onClose,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <header
      {...props}
      className={classnames('modal-card-head', modifiers.classnames(allProps), className)}
    >
      {children}
      {showClose && <Button remove onClick={onClose} />}
    </header>
  );
};

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
  className: '',
  style: {},
  showClose: true,
  onClose: null,
};

export default ModalCardHead;
