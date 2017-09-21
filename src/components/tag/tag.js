import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './tag-group';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Tag = ({
  children,
  className,
  style,
  color,
  size,
  rounded,
  remove,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('tag', className, {
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-rounded': rounded,
        'is-delete': remove,
      })}
    >
      {!remove && children}
    </Element>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['medium', 'large']),
  rounded: PropTypes.bool,
  remove: PropTypes.bool,
  renderAs: PropTypes.string,
};

Tag.defaultProps = {
  children: null,
  className: '',
  style: {},
  color: null,
  size: null,
  rounded: false,
  remove: false,
  renderAs: 'span',
};

Tag.Group = TagGroup;

export default Tag;
