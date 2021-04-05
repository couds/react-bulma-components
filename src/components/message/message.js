import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import MessageBody from './components/body';
import MessageHeader from './components/header';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Message = ({ children, className, color, size, ...props }) => (
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

Message.Body = MessageBody;

Message.Header = MessageHeader;

Message.propTypes = {
  /**
   * Adjusts the size of the message block.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Adjusts the color of the message block. Can be any Bulma color values.
   */
  color: PropTypes.oneOf(colors),
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
