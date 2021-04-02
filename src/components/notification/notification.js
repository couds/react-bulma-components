import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Notification = ({ children, className, color, light, ...props }) => (
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
  >
    {children}
  </Element>
);

Notification.propTypes = {
  ...Element.propTypes,
  color: PropTypes.oneOf(colors),
  light: PropTypes.bool,
};

export default Notification;
