import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHead from './head';
import ModalCardBody from './body';
import ModalCardFoot from './foot';
import ModalCardTitle from './title';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const ModalCard = React.forwardRef(({
  className,
  onClose,
  children,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('modal-card', className)}
  >
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
  onClose: PropTypes.func,
};

ModalCard.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  onClose: null,
};

export default ModalCard;
