import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Notification = ({
  children,
  className,
  color,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('notification', {
      [`is-${color}`]: color,
    }, className)}
  >
    {children}
  </Element>
);

Notification.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOf(colors),
};

Notification.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  color: null,
};

export default Notification;
