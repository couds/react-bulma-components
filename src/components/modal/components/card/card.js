import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHeader from './header';
import ModalCardBody from './body';
import ModalCardFooter from './footer';
import ModalCardTitle from './title';

import Element from '../../../element';

const ModalCard = ({ className, onClose, children, ...props }) => (
  <Element {...props} className={classnames('modal-card', className)}>
    {children}
  </Element>
);

ModalCard.Header = ModalCardHeader;

ModalCard.Body = ModalCardBody;

ModalCard.Footer = ModalCardFooter;

ModalCard.Title = ModalCardTitle;

ModalCard.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCard.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  onClose: undefined,
};

export default ModalCard;
