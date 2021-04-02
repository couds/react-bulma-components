import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const MessageBody = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('message-body', className)}>
    {children}
  </Element>
);

MessageBody.propTypes = {
  ...Element.propTypes,
};

export default MessageBody;
