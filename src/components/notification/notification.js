import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Notification = ({
  children,
  className,
  renderAs,
  color,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('notification', {
        [`is-${color}`]: color,
      }, className)}
    >
      {children}
    </Element>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOf(colors),
};

Notification.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  color: null,
};

export default Notification;
