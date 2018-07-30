import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHead from './head';
import ModalCardBody from './body';
import ModalCardFoot from './foot';
import ModalCardTitle from './title';
import modifiers from '../../../../modifiers';

const ModalCard = ({
  className,
  onClose,
  children,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <div
      {...props}
      className={classnames('modal-card', modifiers.classnames(allProps), className)}
    >
      {children}
    </div>
  );
};


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
