import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHead from './head';
import ModalCardBody from './body';
import ModalCardFoot from './foot';
import ModalCardTitle from './title';

const ModalCard = ({
  className,
  style,
  ...props
}) => {
  const children = React.Children.map(props.children, (child) => {
    if (child.type.toString().indexOf('ModalCardHead') !== -1) {
      return React.cloneElement(child, {
        onClose: props.onClose,
      });
    }
    return child;
  });
  return (
    <div
      className={classnames('modal-card', className)}
      style={style}
    >
      {children}
    </div>
  );
};

ModalCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
};

ModalCard.defaultProps = {
  children: null,
  className: '',
  style: {},
  onClose: null,
};

ModalCard.Head = ModalCardHead;
ModalCard.Body = ModalCardBody;
ModalCard.Foot = ModalCardFoot;
ModalCard.Title = ModalCardTitle;

export default ModalCard;
