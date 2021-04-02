import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const MessageHeader = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('message-header', className)}>
    {children}
  </Element>
);

MessageHeader.propTypes = {
  ...Element.propTypes,
};

export default MessageHeader;
