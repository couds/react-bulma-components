import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import notification from '../../modifiers/notification';

export default class Tile extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    renderAs: PropTypes.string,
    kind: PropTypes.oneOf(['ancestor', 'parent', 'child']),
    vertical: PropTypes.bool,
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    ...notification.propTypes,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    kind: null,
    vertical: false,
    size: null,
    ...notification.defaultProps,
  }

  render() {
    const {
      children,
      className,
      style,
      renderAs,
      kind,
      vertical,
      size,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames(
          'tile', className, {
            [`is-${kind}`]: kind,
            [`is-${size}`]: size,
            'is-vertical': vertical,
          },
          notification.className(props),
  )
        }
      >
        {children}
      </Element>
    );
  }
}
