import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalContent = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('modal-content', className)}
    >
      {children}
    </Element>
  );
};

ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

ModalContent.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default ModalContent;
