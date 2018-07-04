import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MessageBody = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('message-body', className)}
    >
      {children}
    </Element>
  );
};

MessageBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

MessageBody.defaultProps = {
  children: null,
  className: '',
  renderAs: 'div',
};

export default MessageBody;
