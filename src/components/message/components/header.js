import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const MessageHeader = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('message-header', className)}>
    {children}
  </Element>
);

MessageHeader.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

MessageHeader.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  renderAs: 'div',
};

export default MessageHeader;
