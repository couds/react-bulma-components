import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './components/tag-group';
import CONSTANTS from '../../constants';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Tag = ({
  children,
  className,
  color,
  size,
  rounded,
  remove,
  ...props
}) => (
  <Element
    {...props}
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

Tag.Group = TagGroup;

Tag.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['medium', 'large']),
  rounded: PropTypes.bool,
  remove: PropTypes.bool,
};

Tag.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  color: undefined,
  size: undefined,
  rounded: false,
  remove: false,
  renderAs: 'span',
};

export default Tag;
