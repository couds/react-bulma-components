import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  color: PropTypes.oneOf(colors),
  light: PropTypes.bool,
};

Notification.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  color: undefined,
  light: undefined,
};

export default Notification;
