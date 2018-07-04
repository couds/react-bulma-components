import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import MessageBody from './components/body';
import MessageHeader from './components/header';
import modifiers from '../../modifiers';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Message = ({
  children,
  className,
  renderAs,
  color,
  size,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('message', modifiers.classnames(allProps), className, {
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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
};

Message.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'article',
  color: null,
  size: null,
};

export default Message;
