import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHead from './head';
import ModalCardBody from './body';
import ModalCardFoot from './foot';
import ModalCardTitle from './title';

const ModalCard = ({
  className,
  onClose,
  ...props
}) => {
  const children = React.Children.map(props.children, (child) => {
    if (child.type.toString().indexOf('ModalCardHead') !== -1) {
      return React.cloneElement(child, {
        onClose,
      });
    }
    return child;
  });
  return (
    <div
      {...props}
      className={classnames('modal-card', className)}
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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onClose: PropTypes.func,
};

ModalCard.defaultProps = {
  children: null,
  className: '',
  style: {},
  onClose: null,
};

export default ModalCard;
