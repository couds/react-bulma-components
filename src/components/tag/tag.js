import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './tag-group';
import CONSTANTS from '../../constants';

const roles = [null].concat(Object.keys(CONSTANTS.ROLES).map(key => CONSTANTS.ROLES[key]));

const Tag = ({
  children,
  className,
  style,
  type,
  color,
  size,
  rounded,
  remove,
}) => (
  <span
    style={style}
    className={classnames('tag', className, {
      [`is-${size}`]: size,
      [`is-${type}`]: type,
      [`is-${color}`]: color,
      'is-rounded': rounded,
      'is-delete': remove,
    })}
  >
    {children}
  </span>
  );

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(roles),
  color: PropTypes.oneOf(['dark', 'light', 'white', 'black']),
  size: PropTypes.oneOf(['medium', 'large']),
  rounded: PropTypes.bool,
  remove: PropTypes.bool,
};

Tag.defaultProps = {
  children: null,
  className: '',
  style: {},
  type: null,
  color: null,
  size: null,
  rounded: false,
  remove: false,
};

Tag.Group = TagGroup;

export default Tag;
