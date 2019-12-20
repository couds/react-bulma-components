import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import MessageBody from './components/body';
import MessageHeader from './components/header';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

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
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
