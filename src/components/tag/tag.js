import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './components/tag-group';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Tag = ({
  children,
  className,
  color,
  size,
  rounded,
  remove,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('tag', modifiers.classnames(allProps), className, {
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
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Tag.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  color: null,
  size: null,
  rounded: false,
  remove: false,
  renderAs: 'span',
};

export default Tag;
