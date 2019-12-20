import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './components/tag-group';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['medium', 'large']),
  rounded: PropTypes.bool,
  remove: PropTypes.bool,
  renderAs: renderAsShape,
};

Tag.defaultProps = {
  ...modifiers.defaultProps,
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
