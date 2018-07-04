import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const MessageBody = ({
  children,
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('message-body', modifiers.classnames(allProps), className)}
    >
      {children}
    </Element>
  );
};

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
