import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import MessageBody from './components/body';
import MessageHeader from './components/header';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Message extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(colors),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'article',
    color: null,
    size: null,
  }

  static Body = MessageBody
  static Header = MessageHeader

  render() {
    const {
      children,
      className,
      renderAs,
      color,
      size,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('message', className, {
          [`is-${color}`]: color,
          [`is-${size}`]: size,
        })}
      >
        {children}
      </Element>
    );
  }
}
