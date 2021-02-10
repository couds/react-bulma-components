import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import MessageBody from './components/body';
import MessageHeader from './components/header';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

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
  ...modifiers.propTypes,
  children: PropTypes.node,
  /**
   * Additional CSS classes to be passed to `Message`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  /**
   * Adjusts the size of the message block.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Adjusts the color of the message block. Can be any Bulma color values.
   */
  color: PropTypes.oneOf(colors),
};

Message.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'article',
  color: undefined,
  size: undefined,
};

export default Message;
