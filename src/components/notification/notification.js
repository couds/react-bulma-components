import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import notification from '../../modifiers/notification';

export default class Notification extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    ...notification.propTypes,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    ...notification.defaultProps,
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
    return (
      <Element
        style={style}
        className={classnames(notification.className({ ...props, notification: true }), className)}
      >
        {children}
      </Element>
    );
  }
}
