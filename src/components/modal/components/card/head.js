import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Button } from '../../../button';
import { Element } from '../../../element';

export const ModalCardHead = React.forwardRef(({ children, className, onClose, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('modal-card-head', className)}>
    {children}
    {onClose && <Button data-testid="modal-card-close-button" remove onClick={onClose} />}
  </Element>
));

ModalCardHead.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onClose: PropTypes.func
};

ModalCardHead.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'header'
};
