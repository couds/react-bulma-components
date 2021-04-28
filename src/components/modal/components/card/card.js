import React from 'react';
import classnames from 'classnames';

import ModalCardHeader from './header';
import ModalCardBody from './body';
import ModalCardFooter from './footer';
import ModalCardTitle from './title';

import Element from '../../../element';

const ModalCard = ({ className, onClose, children, ...props }) => {
  return (
    <Element {...props} className={classnames('modal-card', className)}>
      {children}
    </Element>
  );
};

ModalCard.Header = ModalCardHeader;

ModalCard.Body = ModalCardBody;

ModalCard.Footer = ModalCardFooter;

ModalCard.Title = ModalCardTitle;

ModalCard.propTypes = {};

ModalCard.defaultProps = {};

export default ModalCard;
