import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

const Notification = ({ children, className, color, ...props }) => (
  <Element
    {...props}
    className={classnames(
      'notification',
      {
        [`is-${color}`]: color,
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
};

Notification.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  color: undefined,
};

export default Notification;
