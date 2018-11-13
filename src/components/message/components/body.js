import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const MessageBody = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('message-body', className)}
  >
    {children}
  </Element>
));

MessageBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

MessageBody.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  renderAs: 'div',
};

export default MessageBody;
