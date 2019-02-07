import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const MessageHeader = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('message-header', className)}>
    {children}
  </Element>
));

MessageHeader.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

MessageHeader.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  renderAs: 'div'
};
