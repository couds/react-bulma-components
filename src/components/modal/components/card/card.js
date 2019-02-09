import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';
import { ModalCardBody } from './body';
import { ModalCardFoot } from './foot';
import { ModalCardHead } from './head';
import { ModalCardTitle } from './title';

// eslint-disable-next-line no-unused-vars
export const ModalCard = React.forwardRef(({ className, onClose, children, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('modal-card', className)}>
    {children}
  </Element>
));

ModalCard.Head = ModalCardHead;

ModalCard.Body = ModalCardBody;

ModalCard.Foot = ModalCardFoot;

ModalCard.Title = ModalCardTitle;

ModalCard.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onClose: PropTypes.func
};

ModalCard.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  onClose: null
};
