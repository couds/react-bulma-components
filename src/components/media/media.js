import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MediaItem from './components/media-item';
import MediaContent from './components/media-content';

export default class Media extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'article',
  }

  static Item = MediaItem
  static Content = MediaContent

  render() {
    const {
      children,
      className,
      style,
      renderAs,
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames('media', className, {
        })}
      >
        {children}
      </Element>
    );
  }
}
