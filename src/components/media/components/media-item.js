import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class MediaItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    position: PropTypes.oneOf(['center', 'right', 'left']),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    position: 'center',
  }

  render() {
    const {
      children,
      className,
      style,
      renderAs,
      ...props
    } = this.props;

    const Element = renderAs;
    let { position } = props;
    if (position === 'center') {
      position = 'content';
    }
    return (
      <Element
        style={style}
        className={classnames(className, {
          [`media-${position}`]: position,
        })}
      >
        {children}
      </Element>
    );
  }
}
