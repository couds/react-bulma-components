import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Notification = ({ className, color, light, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(
        'notification',
        {
          [`is-${color}`]: color,
          'is-light': light,
        },
        className,
      )}
    />
  );
};

Notification.propTypes = {
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
  light: PropTypes.bool,
};

export default Notification;
