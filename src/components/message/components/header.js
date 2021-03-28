import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const MessageHeader = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('message-header', className)}>
    {children}
  </Element>
);

MessageHeader.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

MessageHeader.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  renderAs: 'div',
};

export default MessageHeader;
