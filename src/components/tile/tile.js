import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));


export default class Tile extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    kind: PropTypes.oneOf(['ancestor', 'parent', 'child']),
    vertical: PropTypes.bool,
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    color: PropTypes.oneOf(colors),
    notification: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    kind: null,
    vertical: false,
    size: null,
    color: null,
    notification: false,
  }

  render() {
    const {
      children,
      className,
      renderAs,
      kind,
      vertical,
      size,
      color,
      notification,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames(
          'tile', className, {
            notification,
            [`is-${kind}`]: kind,
            [`is-${size}`]: size,
            [`is-${color}`]: color,
            'is-vertical': vertical,
          })
        }
      >
        {children}
      </Element>
    );
  }
}
