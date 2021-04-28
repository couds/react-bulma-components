import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const MessageBody = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('message-body', className)}>
      {children}
    </Element>
  );
};

MessageBody.propTypes = {};

export default MessageBody;
