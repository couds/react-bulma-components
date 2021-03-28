import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const MessageBody = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('message-body', className)}>
    {children}
  </Element>
);

MessageBody.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

MessageBody.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  renderAs: 'div',
};

export default MessageBody;
