import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHead from './head';
import ModalCardBody from './body';
import ModalCardFoot from './foot';
import ModalCardTitle from './title';

import Element from '../../../element';

const ModalCard = ({ className, onClose, children, ...props }) => (
  <Element {...props} className={classnames('modal-card', className)}>
    {children}
  </Element>
);

ModalCard.Head = ModalCardHead;

ModalCard.Body = ModalCardBody;

ModalCard.Foot = ModalCardFoot;

ModalCard.Title = ModalCardTitle;

ModalCard.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onClose: PropTypes.func,
};

ModalCard.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  onClose: undefined,
};

export default ModalCard;
