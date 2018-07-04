import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const MessageHeader = ({
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
      className={classnames('message-header', modifiers.classnames(allProps), className)}
    >
      {children}
    </Element>
  );
};


MessageHeader.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

MessageHeader.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  renderAs: 'div',
};

export default MessageHeader;
