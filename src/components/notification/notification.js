import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import notification from '../../modifiers/notification';

const Notification = ({
  children,
  className,
  style,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(notification.className({ ...props, notification: true }), className)}
    >
      {children}
    </Element>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  ...notification.propTypes,
};

Notification.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  ...notification.defaultProps,
};

export default Notification;
