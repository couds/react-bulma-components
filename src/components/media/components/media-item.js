import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class MediaItem extends PureComponent {
  static displayName = 'Media.Item'
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
      renderAs,
      position,
      ...props
    } = this.props;

    const Element = renderAs;
    const p = position === 'center' ? 'content' : position;
    return (
      <Element
        {...props}
        className={classnames(className, {
          [`media-${p}`]: p,
        })}
      >
        {children}
      </Element>
    );
  }
}
