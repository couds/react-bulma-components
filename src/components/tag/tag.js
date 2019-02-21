import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { Tags } from './components/tags';

const colors = Object.values(CONSTANTS.COLORS);

export const Tag = React.forwardRef(
  ({ children, className, color, close, size, ellipsis, rounded, remove, onClick, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      onClick={() => remove && onClick()}
      data-testid="tag"
      className={cn('tag', className, {
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-rounded': rounded,
        'is-delete': remove
      })}
    >
      {!remove && <span className={cn({ 'has-ellipsis': ellipsis })}>{children}</span>}
      {!remove && close && <button onClick={onClick} className="delete is-small" data-testid="tag-delete" />}
    </Element>
  )
);

Tag.Group = Tags;

Tag.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([null, 'medium', 'large']),
  rounded: PropTypes.bool,
  remove: PropTypes.bool,
  close: PropTypes.bool,
  ellipsis: PropTypes.bool,
  onClick: PropTypes.func,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
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
  close: false,
  ellipsis: false,
  onClick: () => {},
  renderAs: 'span'
};
