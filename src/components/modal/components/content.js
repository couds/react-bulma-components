import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalContent = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('modal-content', className)}
    >
      {children}
    </Element>
  );
};


ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

ModalContent.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default ModalContent;
