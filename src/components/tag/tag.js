import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './components/tag-group';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Tag extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(['medium', 'large']),
    rounded: PropTypes.bool,
    remove: PropTypes.bool,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    color: null,
    size: null,
    rounded: false,
    remove: false,
    renderAs: 'span',
  }

  static Group = TagGroup

  render() {
    const {
      children,
      className,
      color,
      size,
      rounded,
      remove,
      renderAs,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
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
  }
}
