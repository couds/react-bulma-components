import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MessageBody from './components/body';
import MessageHeader from './components/header';

import Element from '../element';

const Message = ({ children, className, color, size, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('message', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

Message.Body = MessageBody;

Message.Header = MessageHeader;

Message.propTypes = {
  /**
   * Adjusts the size of the message block.
   */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * Adjusts the color of the message block. Can be any Bulma color values.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Message.defaultProps = {
  renderAs: 'article',
};

export default Message;
