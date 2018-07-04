import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MessageHeader = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('message-header', className)}
    >
      {children}
    </Element>
  );
};


MessageHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

MessageHeader.defaultProps = {
  children: null,
  className: '',
  renderAs: 'div',
};

export default MessageHeader;
