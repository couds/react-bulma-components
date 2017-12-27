import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class MessageBody extends PureComponent {
  static displayName = 'Message.Body'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    children: null,
    className: '',
    renderAs: 'div',
  }
  render() {
    const {
      children,
      className,
      renderAs,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('message-body', className)}
      >
        {children}
      </Element>
    );
  }
}
